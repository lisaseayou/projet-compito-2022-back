import { ApolloError } from 'apollo-server-express';
import { Service } from 'typedi';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';
import { promisify } from 'util';
import UpdateUserInput from '../inputs/users/UpdateUser.input';
import AddUserInput from '../inputs/users/AddUser.input';
import generateToken, { generateTokenResetPassword } from '../utils/auth';
import { IContext } from '../interfaces';
import RecordNotFoundError from '../errors/RecordNotFound.error';
import transport, { passwordResetEmail } from '../utils/mail';

@Service()
class UserService {
    async findAll(ctx: IContext) {
        return ctx.prisma.user.findMany({
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });
    }

    async findByResetToken(ctx: IContext, resetToken: string) {
        return ctx.prisma.user.findUnique({
            where: { resetToken },
            rejectOnNotFound: new RecordNotFoundError(
                "Vous n'êtes pas autorisé à modifier le mot de passe de cet utilisateur."
            ),
        });
    }

    async register(ctx: IContext, data: AddUserInput) {
        const { name, email, roles, password, passwordConfirm } = data;

        // check if user exist
        const user = await ctx.prisma.user.findUnique({
            where: { email },
            rejectOnNotFound: false,
        });

        if (user) {
            throw new ApolloError('Un utilisateur avec cet email existe déjà.');
        }

        // check if passwords match
        if (password !== passwordConfirm) {
            throw new Error('Les mots de passe doivent être identiques.');
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);

        // generate the token of connection
        // const token = generateToken({
        //     name,
        //     email,
        //     roles,
        // });

        const userToDb = await ctx.prisma.user.create({
            data: {
                name: name,
                email: email,
                roles: roles,
                password: passwordHashed,
            },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });

        // create the cookies limit to 7 days
        // ctx.res.cookie('token', token, {
        //     secure: process.env.NODE_ENV === 'production',
        //     httpOnly: true,
        //     maxAge: 1000 * 60 * 60 * 24 * 7,
        //     sameSite: 'strict',
        // });

        return { ...userToDb, success: true };
    }

    async login(ctx: IContext, email: string, password: string) {
        // check if user exist
        const user = await ctx.prisma.user.findUnique({
            where: { email },
            rejectOnNotFound: new RecordNotFoundError(
                'Vérifiez vos informations de connexion.'
            ),
        });

        // validate password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new ApolloError('Vérifiez vos informations de connexion.');
        }

        const { name, roles } = user;
        const token = generateToken({ name, email, roles });

        // create the cookies limit to 7 days
        ctx.res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'strict',
        });

        return { ...user, success: true };
    }

    async logout(ctx: IContext) {
        ctx.res.clearCookie('token');
        return 'Vous êtes bien déconnecté.';
    }

    async updateOne(ctx: IContext, id: string, data: UpdateUserInput) {
        const {
            name,
            email,
            roles,
            password,
            description,
            url,
            twitter,
            linkedin,
            github,
        } = data;

        const userToUpdate = ctx.prisma.user.findUnique({
            where: { id },
        });

        const userUpdated = ctx.prisma.user.update({
            where: { id },
            data: {
                name: userToUpdate.name ?? name,
                email: userToUpdate.email ?? email,
                roles: userToUpdate.roles ?? roles,
                password: userToUpdate.password ?? password,
                description: userToUpdate.description ?? description,
                url: userToUpdate.url ?? url,
                twitter: userToUpdate.twitter ?? twitter,
                linkedin: userToUpdate.linkedin ?? linkedin,
                github: userToUpdate.github ?? github,
            },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });
        return userUpdated;
    }

    async deleteOne(ctx: IContext, id: string) {
        const currentUser = ctx.prisma.user.delete({
            where: { id },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });

        return currentUser;
    }

    async requestResetPassword(ctx: IContext, email: string) {
        // check if user exist
        await ctx.prisma.user.findUnique({
            where: { email },
            rejectOnNotFound: new RecordNotFoundError(
                "Aucun compte n'est associé avec cet email."
            ),
        });

        // Create randomBytes that will be used as a token
        const randomBytesPromisified = promisify(randomBytes);
        const resetToken = (await randomBytesPromisified(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 day

        // Add token and tokenExpiry to the db user
        const updatedUser = await ctx.prisma.user.update({
            where: { email },
            data: {
                resetToken,
                resetTokenExpiry,
            },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });

        const passwordResetUrl =
            process.env.NODE_ENV === 'development'
                ? `http://${process.env.CLIENT_URI}auth/reset-password/${resetToken}`
                : `https://${process.env.CLIENT_URI}auth/reset-password/${resetToken}`;

        // Email them the token
        await transport.sendMail({
            from: process.env.MAIL_SENDER,
            to: updatedUser.email,
            subject: 'Demande de changement de mot de passe sur Compito',
            html: passwordResetEmail(`Voici le lien pour définir un nouveau mot de passe.
      \n\n
      <a href="${passwordResetUrl}">Cliquer sur ce lien</a>`),
        });

        return updatedUser;
    }

    async resetPassword(
        ctx: IContext,
        email: string,
        password: string,
        passwordConfirm: string,
        resetToken: string
    ) {
        // check if passwords match
        if (password !== passwordConfirm) {
            throw new Error('Les mots de passe doivent être identiques.');
        }

        // check if the reset token is ok
        const user = await ctx.prisma.user.findFirst({
            where: {
                email,
                resetToken,
                // resetTokenExpiry: { gte: Math.floor(expiryCheck / 1000) },
            },
            rejectOnNotFound: new Error(
                "Vous n'êtes pas autorisé à modifier le mot de passe de cet utilisateur."
            ),
        });

        // hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const updatedUser = await ctx.prisma.user.update({
            where: { email: user.email },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
            },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });

        // Email them the token
        await transport.sendMail({
            from: process.env.MAIL_SENDER,
            to: updatedUser.email,
            subject: 'Changement de mot de passe sur Compito',
            html: passwordResetEmail(
                `Votre mot de passe a été changé avec succès!`
            ),
        });

        // generate a JWT
        const token = generateTokenResetPassword(updatedUser);

        // set the JWT cookie
        // create the cookies limit to 7 days
        ctx.res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            sameSite: 'strict',
        });

        return updatedUser;
    }
}

export default UserService;
