import { ApolloError } from 'apollo-server-express';
import { Service } from 'typedi';
import * as bcrypt from 'bcrypt';
import UpdateUserInput from '../inputs/users/UpdateUser.input';
import AddUserInput from '../inputs/users/AddUser.input';
import generateToken from '../utils/auth';
import { IContext } from '../interfaces';

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

    async register(ctx: IContext, data: AddUserInput) {
        const { name, email, roles, password } = data;

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);

        // generate the token of connection
        const token = generateToken({
            name,
            email,
            roles,
        });

        const userToDb = await ctx.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                roles: data.roles,
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
        ctx.res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'strict',
        });

        return { ...userToDb, success: true };
    }

    async login(ctx: IContext, email: string, password: string) {
        // check if user exist
        const user = ctx.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new ApolloError("Cet utilisateur n'existe pas");
        }

        await user.then(async (result: any) => {
            const match = await bcrypt.compare(password, result.password);

            if (!match) {
                throw new ApolloError('Vérifiez vos informations');
            }

            const { name, roles } = result;
            const token = generateToken({ name, email, roles });

            // create the cookies limit to 7 days
            await ctx.res.cookie('token', token, {
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: 'strict',
            });
        });

        return { ...user, success: false };
    }

    async updateOne(ctx: IContext, id: string, data: UpdateUserInput) {
        const { name, email, roles, password } = data;

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
}

export default UserService;
