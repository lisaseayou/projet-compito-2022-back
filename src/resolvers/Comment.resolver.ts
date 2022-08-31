import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import Comment from '../models/Comment.model';
import CommentService from '../services/Comment.service';
import AddCommentInput from '../inputs/comments/AddComment.input';
import UpdateCommentInput from '../inputs/comments/UpdateComment.input';

@Service()
@Resolver(Comment)
class CommentResolver {
    constructor(private readonly commentService: CommentService) { }

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
        @Arg("data") data: AddCommentInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.commentService?.save(ctx, data);
    }

    @Mutation(() => Comment, {
        description: 'Delete comment by id',
    })
    async deleteComment(@Arg('id') id: string, @Ctx() ctx: { prisma: any }) {
        return this?.commentService?.deleteOne(ctx, id);
    }

    @Mutation(() => Comment, {
        description: 'Update comment by id',
    })
    async updateComment(
        @Arg('id') id: string,
        @Arg('data') data: UpdateCommentInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.commentService?.updateOne(ctx, id, data);
    }
}

export default CommentResolver;
