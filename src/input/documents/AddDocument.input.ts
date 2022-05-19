import { ArgsType, Field, GraphQLISODateTime, Int } from 'type-graphql';

@ArgsType()
class AddDocumentInput {
    @Field(() => String)
    name: string

    @Field(() => Int)
    size: number

    @Field(() => GraphQLISODateTime)
    createdAt: Date
}

export default AddDocumentInput;