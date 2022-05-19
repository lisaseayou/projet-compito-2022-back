import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Comment from '../models/Comment.model';
import AddCommentType from '../input/comments/AddComment.input';
import DeleteCommentType from '../input/Delete.input';
import UpdateCommentType from '../input/comments/UpdateComment.input';

@Resolver(Comment)
class CommentResolver {
    @Query(() => [Comment, Query])
    async allComments(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.comment.findMany();
    }

    @Mutation(() => Comment)
    async addComment(
        @Args() { comment, createdAt, updatedAt }: AddCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentToDb = await ctx.prisma.comment.create({
            data: { comment, createdAt, updatedAt },
        });
        return commentToDb;
    }

    @Mutation(() => Comment)
    async deleteComment(
        @Args() { id }: DeleteCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentComment = ctx.prisma.comment.delete({ where: { id } });
        return currentComment;
    }

    @Mutation(() => Comment)
    async updateComment(
        @Args() { id, comment, updatedAt }: UpdateCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentUpdated = ctx.prisma.comment.update({
            where: { id },
            data: {
                comment,
                updatedAt,
            },
        });
        return commentUpdated;
    }
}

export default CommentResolver;
