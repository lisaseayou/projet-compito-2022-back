import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import Notification from '../models/Notification.model';
import NotificationService from '../services/Notification.service';
import UpdateNotificationInput from '../inputs/notifications/UpdateNotification.input';
import AddNotificationInput from '../inputs/notifications/AddNotification.input';

@Service()
@Resolver(Notification)
class NotificationResolver {
    constructor(private readonly notificationService: NotificationService) {}

    @Query(() => [Notification, Query], {
        description: 'Get all notifications',
        nullable: true,
    })
    async allNotifications(@Ctx() ctx: { prisma: any }) {
        return this?.notificationService?.findAll(ctx);
    }

    @Mutation(() => Notification, {
        description: 'Add new notification',
        nullable: false,
    })
    async addNotification(
        @Arg('data') data: AddNotificationInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.save(ctx, data);
    }

    @Mutation(() => Notification, {
        description: 'Delete notification by id',
    })
    async deleteNotification(
        @Arg('id') id: string,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.deleteOne(ctx, id);
    }

    @Mutation(() => Notification, {
        description: 'Update notification by id',
    })
    async updateNotification(
        @Arg('id') id: string,
        @Arg('data') data: UpdateNotificationInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.updateOne(ctx, id, data);
    }
}

export default NotificationResolver;
