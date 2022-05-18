import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateCommentType {
    @Field(() => ID)
    id: string

    @Field(() => String)
    comment?: string
}

export default UpdateCommentType;