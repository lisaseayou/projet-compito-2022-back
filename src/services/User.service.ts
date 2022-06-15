import { Service } from 'typedi';

@Service()
class UserService {
    async findAll(ctx: any) {
        return ctx.prisma.user.findMany({
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });
    }

    async save(
        ctx: any,
        name: string,
        email: string,
        roles: string[],
        password: string
    ) {
        const userToDb = await ctx.prisma.user.create({
            data: {
                name,
                email,
                roles,
                password,
            },
            include: {
                notifications: true,
                projects: true,
                tasks: true,
                comments: true,
            },
        });
        return userToDb;
    }

    async updateOne(
        ctx: any,
        id: string,
        name?: string,
        email?: string,
        roles?: string[],
        password?: string
    ) {
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

    async deleteOne(ctx: any, id: string) {
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
