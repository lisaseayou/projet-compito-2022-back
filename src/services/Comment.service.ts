import { Service } from 'typedi';
import AddCommentInput from '../inputs/comments/AddComment.input';
import UpdateCommentInput from '../inputs/comments/UpdateComment.input';

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

    async save(ctx: any, data: AddCommentInput) {
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

    async updateOne(ctx: any, id: string, data: UpdateCommentInput) {
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
