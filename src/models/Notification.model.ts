import {ObjectType, Field, ID, GraphQLISODateTime} from 'type-graphql';

@ObjectType()
class Notification {
    @Field(() => ID)
    id: string

    @Field(() => String)
    description: string

    @Field(() => Boolean)
    isRead: boolean

    @Field(() => GraphQLISODateTime)
    createdAt: Date
}

export default Notification