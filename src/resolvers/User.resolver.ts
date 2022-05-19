import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import User from '../models/User.model';
import AddUserType from '../input/users/AddUser.input';
import DeleteUserType from '../input/Delete.input';
import UpdateUserType from '../input/users/UpdateUser.input';

@Resolver(User)
class UserResolver {
    @Query(() => [User, Query])
    async allUsers(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.user.findMany();
    }

    @Mutation(() => User)
    async addUser(
        @Args()
        { name, email, roles, password, createdAt, updatedAt }: AddUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        const userToDb = await ctx.prisma.user.create({
            data: { name, email, roles, password, createdAt, updatedAt },
        });
        return userToDb;
    }

    @Mutation(() => User)
    async deleteUser(
        @Args() { id }: DeleteUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentUser = ctx.prisma.user.delete({ where: { id } });
        return currentUser;
    }

    @Mutation(() => User)
    async updateUser(
        @Args() { id, name, email, roles, password, updatedAt }: UpdateUserType,
        @Ctx() ctx: { prisma: any }
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
                updatedAt: userToUpdate.updatedAt ?? updatedAt,
            },
        });
        return userUpdated;
    }
}

export default UserResolver;
