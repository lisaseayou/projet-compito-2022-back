import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import User from '../models/User.model';
import AddUserType from '../types/users/AddUser.type';

@Resolver(User)
class UserResolver {
  @Query(() => [User, Query])
  async allUsers(@Ctx() ctx: { prisma: any }) {
    return ctx.prisma.user.findMany();
  }

  @Mutation(() => User)
  async addUser(@Args() { name }: AddUserType, @Ctx() ctx: { prisma: any }) {
    const newUser = new User();
    newUser.name = name;

    const userToDb = await ctx.prisma.user.create({ data: newUser });

    return userToDb;
  }
}

export default UserResolver;
