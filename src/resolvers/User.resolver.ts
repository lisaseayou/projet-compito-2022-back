import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import User from '../models/User.model';
import AddUserType from '../input/users/AddUser.input';
import DeleteUserType from '../input/Delete.input';
import UpdateUserType from '../input/users/UpdateUser.input';
import UserService from '../services/User.service';
import LoginUserType from '../input/users/LoginUser.input';

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
        @Args()
        { name, email, roles, password }: AddUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.register(ctx, {
            name,
            email,
            roles,
            password,
        });
    }

    @Query(() => User, {
        description: 'Login user',
    })
    async login(
        @Args() { email, password }: LoginUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.login(ctx, email, password);
    }

    @Mutation(() => User, {
        description: 'Delete user by id',
    })
    async deleteUser(
        @Args() { id }: DeleteUserType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.userService?.deleteOne(ctx, id);
    }

    @Mutation(() => User, {
        description: 'Update user by id',
    })
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
