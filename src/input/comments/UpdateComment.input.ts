import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateCommentType {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    comment: string;

    @Field(() => String, { nullable: true })
    taskId?: string;

    @Field(() => String)
    userId: string;
}

export default UpdateCommentType;
