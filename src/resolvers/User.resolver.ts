import { Resolver, Query, Ctx } from 'type-graphql';
import UserModel from '../models/User.model';

@Resolver(UserModel)
class UserResolver {
    @Query(() => [UserModel, Query])
    async allUsers(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.user.findMany()
    }
}

export default UserResolver