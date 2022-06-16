import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import Comment from '../models/Comment.model';
import AddCommentType from '../input/comments/AddComment.input';
import DeleteCommentType from '../input/Delete.input';
import UpdateCommentType from '../input/comments/UpdateComment.input';
import CommentService from '../services/Comment.service';

@Service()
@Resolver(Comment)
class CommentResolver {
    constructor(private readonly commentService: CommentService) {}

    @Query(() => [Comment, Query], {
        description: 'Get all comments',
        nullable: true,
    })
    async allComments(@Ctx() ctx: { prisma: any }) {
        return this?.commentService?.findAll(ctx);
    }

    @Mutation(() => Comment, {
        description: 'Add new comment',
        nullable: false,
    })
    async addComment(
        @Args()
        { comment, taskId, userId }: AddCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.commentService?.save(ctx, comment, userId, taskId);
    }

    @Mutation(() => Comment, {
        description: 'Delete comment by id',
    })
    async deleteComment(
        @Args() { id }: DeleteCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.commentService?.deleteOne(ctx, id);
    }

    @Mutation(() => Comment, {
        description: 'Update comment by id',
    })
    async updateComment(
        @Args() { id, comment, taskId, userId }: UpdateCommentType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.commentService?.updateOne(
            ctx,
            id,
            comment,
            taskId,
            userId
        );
    }
}

export default CommentResolver;
