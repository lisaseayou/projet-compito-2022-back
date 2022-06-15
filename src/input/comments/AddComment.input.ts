import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddCommentInput {
    @Field(() => String)
    comment: string;

    @Field(() => String, { nullable: true })
    taskId?: string;

    @Field(() => String)
    userId: string;
}

export default AddCommentInput;
