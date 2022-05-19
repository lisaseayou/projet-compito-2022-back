import { ArgsType, Field, GraphQLISODateTime } from 'type-graphql';

@ArgsType()
class AddCommentInput {
    @Field(() => String)
    comment: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}

export default AddCommentInput;
