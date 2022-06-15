import { Service } from 'typedi';

@Service()
class CommentService {
    async findAll(ctx: any) {
        return ctx.prisma.comment.findMany({
            include: {
                task: true,
                user: true,
            },
        });
    }

    async save(ctx: any, comment: string, userId: string, taskId?: string) {
        const commentToDb = await ctx.prisma.comment.create({
            data: {
                comment,
                task: {
                    connect: { id: taskId },
                },
                user: {
                    connect: { id: userId },
                },
            },
            include: {
                task: true,
                user: true,
            },
        });
        return commentToDb;
    }

    async updateOne(
        ctx: any,
        id: string,
        comment?: string,
        taskId?: string,
        userId?: string
    ) {
        const commentToUpdate = ctx.prisma.comment.findUnique({
            where: { id },
        });

        const commentUpdated = ctx.prisma.comment.update({
            where: { id },
            data: {
                comment: comment ?? commentToUpdate?.comment,
                task: {
                    connect: {
                        id: taskId,
                    },
                },
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
            include: {
                task: true,
                user: true,
            },
        });
        return commentUpdated;
    }

    async deleteOne(ctx: any, id: string) {
        const currentComment = ctx.prisma.comment.delete({
            where: { id },
            include: {
                task: true,
                user: true,
            },
        });
        return currentComment;
    }
}

export default CommentService;
