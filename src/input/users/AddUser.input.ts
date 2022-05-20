import { ArgsType, Field, GraphQLISODateTime } from 'type-graphql';

@ArgsType()
class AddUserInput {
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

export default AddUserInput;
