import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateCommentType {
    @Field(() => ID, { description: 'Id of the comment' })
    id: string;

    @Field(() => String, { description: 'Content of the comment' })
    comment: string;

    @Field(() => String, {
        nullable: true,
        description: 'ID of the task to link to the comment',
    })
    taskId?: string;

    @Field(() => String, {
        description: 'ID of the user to link to the comment',
    })
    userId: string;
}

export default UpdateCommentType;
