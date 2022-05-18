import {ObjectType, Field, ID, Int, GraphQLISODateTime} from 'type-graphql';

@ObjectType()
class Task {
    @Field(() => ID)
    id: string

    @Field(() => String)
    subject: string

    @Field(() => String)
    status: string

    @Field(() => String)
    dueDate: string

    @Field(() => Int)
    initialSpentTime: number

    @Field(() => [Int])
    additionalSpentTime: [number]

    @Field(() => Int)
    advancement: number

    @Field(() => GraphQLISODateTime)
    createdAt: Date

    @Field(() => GraphQLISODateTime)
    updatedAt: Date
    /*
    @Field(() => User)
    assignedUser: User
     */
}

export default Task