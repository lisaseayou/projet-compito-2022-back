import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';

@ObjectType()
class User {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => [String])
    roles: string[];

    @Field(() => String)
    password: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}

export default User;
