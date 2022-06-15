import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import User from '../models/User.model';
import AddUserType from '../input/users/AddUser.input';
import DeleteUserType from '../input/Delete.input';
import UpdateUserType from '../input/users/UpdateUser.input';
import UserService from '../services/User.service';

@Service()
@Resolver(User)
class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User, Query])
    async allUsers(@Ctx() ctx: { prisma: any }) {
        return this?.userService?.findAll(ctx);
    }

    @Mutation(() => User)
    async addUser(
        @Args()
        { name, email, roles, password }: AddUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.save(ctx, name, email, roles, password);
    }

    @Mutation(() => User)
    async deleteUser(
        @Args() { id }: DeleteUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.deleteOne(ctx, id);
    }

    @Mutation(() => User)
    async updateUser(
        @Args() { id, name, email, roles, password }: UpdateUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.updateOne(
            ctx,
            id,
            name,
            email,
            roles,
            password
        );
    }
}

export default UserResolver;
