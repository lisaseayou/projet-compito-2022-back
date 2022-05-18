import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class User {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name: string
}

export default User