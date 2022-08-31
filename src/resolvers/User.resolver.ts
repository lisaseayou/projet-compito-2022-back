import { Arg, Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import User from '../models/User.model';
import UserService from '../services/User.service';
import AddUserInput from '../inputs/users/AddUser.input';
import LoginUserArgs from '../args/users/LoginUser.args';
import UpdateUserInput from '../inputs/users/UpdateUser.input';

@Service()
@Resolver(User)
class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User, Query], {
        description: 'Get all users',
        nullable: true,
    })
    async allUsers(@Ctx() ctx: { prisma: any }) {
        return this?.userService?.findAll(ctx);
    }

    @Mutation(() => User, {
        description: 'Register new user',
        nullable: false,
    })
    async register(
        @Arg('data') data: AddUserInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.register(ctx, data);
    }

    @Query(() => User, {
        description: 'Login user',
    })
    async login(
        @Args() { email, password }: LoginUserArgs,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.login(ctx, email, password);
    }

    @Mutation(() => User, {
        description: 'Delete user by id',
    })
    async deleteUser(@Arg('id') id: string, @Ctx() ctx: { prisma: any }) {
        return this?.userService?.deleteOne(ctx, id);
    }

    @Mutation(() => User, {
        description: 'Update user by id',
    })
    async updateUser(
        @Arg('id') id: string,
        @Arg('data') data: UpdateUserInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.updateOne(ctx, id, data);
    }
}

export default UserResolver;
