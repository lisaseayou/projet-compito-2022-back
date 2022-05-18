import {ObjectType, Field, ID, GraphQLISODateTime} from 'type-graphql';

@ObjectType()
class Project {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name: string

    @Field(() => GraphQLISODateTime)
    createdAt: Date

    @Field(() => GraphQLISODateTime)
    updatedAt: Date
}

export default Project