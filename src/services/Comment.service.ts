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

    async save(
        ctx: any,
        data: { comment: string; userId: string; taskId?: string }
    ) {
        const { comment, userId, taskId } = data;

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
        data: { comment?: string; taskId?: string; userId?: string }
    ) {
        const { comment, taskId, userId } = data;
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
