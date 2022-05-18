import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Notification from '../models/Notification.model';
import AddNotificationType from '../input/notifications/AddNotification.input';
import DeleteNotificationType from '../input/Delete.input';
import UpdateNotificationType from '../input/notifications/UpdateNotification.input';

@Resolver(Notification)
class NotificationResolver {

    @Query(() => [Notification, Query])
    async allNotifications(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.notification.findMany();
    }

    @Mutation(() => Notification)
    async addNotification(@Args() { description }: AddNotificationType, @Ctx() ctx: { prisma: any }) {
        const notificationToDb = await ctx.prisma.notification.create({ data: { description } });
        return notificationToDb;
    }

    @Mutation(() => Notification)
    async deleteNotification(
        @Args() { id }: DeleteNotificationType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentNotification = ctx.prisma.notification.delete({ where: { id } });
        return currentNotification;
    }

    @Mutation(() => Notification)
    async updateNotification(
        @Args() { id, isRead }: UpdateNotificationType,
        @Ctx() ctx: { prisma: any }
    ) {
        const notificationToUpdate = ctx.prisma.notification.update({
            where: { id },
            data: { isRead },
        });
        return notificationToUpdate;
    }
}

export default NotificationResolver;
