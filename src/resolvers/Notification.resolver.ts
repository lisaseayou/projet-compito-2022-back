import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import Notification from '../models/Notification.model';
import AddNotificationType from '../input/notifications/AddNotification.input';
import DeleteNotificationType from '../input/Delete.input';
import UpdateNotificationType from '../input/notifications/UpdateNotification.input';
import NotificationService from '../services/Notification.service';

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
        @Args() { description, isRead, userId }: AddNotificationType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.save(
            ctx,
            description,
            isRead,
            userId
        );
    }

    @Mutation(() => Notification, {
        description: 'Delete notification by id',
    })
    async deleteNotification(
        @Args() { id }: DeleteNotificationType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.deleteOne(ctx, id);
    }

    @Mutation(() => Notification, {
        description: 'Update notification by id',
    })
    async updateNotification(
        @Args() { id, description, isRead, userId }: UpdateNotificationType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.notificationService?.updateOne(
            ctx,
            id,
            description,
            isRead,
            userId
        );
    }
}

export default NotificationResolver;
