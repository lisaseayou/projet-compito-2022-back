import { ArgsType, Field, GraphQLISODateTime, ID } from 'type-graphql';

@ArgsType()
class UpdateCommentType {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    comment: string;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => String, { nullable: true })
    taskId?: string;
}

export default UpdateCommentType;
