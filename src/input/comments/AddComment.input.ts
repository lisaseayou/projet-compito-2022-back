import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddCommentInput {
    @Field(() => String)
    comment: string
}

export default AddCommentInput;