import { InputType, Field } from 'type-graphql';

@InputType()
class AddCommentInput {
    @Field(() => String, { description: 'Content of the comment' })
    comment: string;

    @Field(() => String, { nullable: true, description: 'ID of the task to link to the comment' })
    taskId?: string;

    @Field(() => String, { nullable: true, description: 'ID of the user to link to the comment' })
    userId: string;
}

export default AddCommentInput;
