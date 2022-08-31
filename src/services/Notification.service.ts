import { Service } from 'typedi';
import AddNotificationInput from '../inputs/notifications/AddNotification.input';
import UpdateNotificationInput from '../inputs/notifications/UpdateNotification.input';
import { IContext } from '../interfaces';

@Service()
class NotificationService {
    async findAll(ctx: IContext) {
        return ctx.prisma.notification.findMany({
            include: {
                user: true,
            },
        });
    }

    async save(ctx: IContext, data: AddNotificationInput) {
        const { description, isRead, userId } = data;

        const notificationToDb = await ctx.prisma.notification.create({
            data: {
                description,
                isRead,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
            include: {
                user: true,
            },
        });
        return notificationToDb;
    }

    async updateOne(ctx: IContext, id: string, data: UpdateNotificationInput) {
        const { description, isRead, userId } = data;

        const notifToUpdate = ctx.prisma.notification.findUnique({
            where: { id },
        });

        const notificationToUpdate = ctx.prisma.notification.update({
            where: { id },
            data: {
                description: description ?? notifToUpdate.description,
                isRead: isRead ?? notifToUpdate.isRead,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
            include: {
                user: true,
            },
        });

        return notificationToUpdate;
    }

    async deleteOne(ctx: IContext, id: string) {
        const currentNotification = ctx.prisma.notification.delete({
            where: { id },
            include: {
                user: true,
            },
        });
        return currentNotification;
    }
}

export default NotificationService;
