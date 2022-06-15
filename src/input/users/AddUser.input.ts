import { ArgsType, Field } from 'type-graphql';

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
}

export default AddUserInput;
