import {ObjectType, Field, ID, Int, GraphQLISODateTime} from 'type-graphql';

@ObjectType()
class Document {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name: string

    @Field(() => Int)
    size: number

    @Field(() => GraphQLISODateTime)
    createdAt: Date
}

export default Document