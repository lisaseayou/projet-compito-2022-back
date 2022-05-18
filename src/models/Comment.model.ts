import {ObjectType, Field, ID, GraphQLISODateTime} from 'type-graphql';

@ObjectType()
class Comment {
    @Field(() => ID)
    id: string

    @Field(() => String)
    comment: string

    @Field(() => GraphQLISODateTime)
    createdAt: Date

    @Field(() => GraphQLISODateTime)
    updatedAt: Date
}

export default Comment