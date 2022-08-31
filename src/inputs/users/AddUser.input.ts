import { InputType, Field } from 'type-graphql';

@InputType()
class AddUserInput {
    @Field(() => String, { description: 'Name of the user' })
    name: string;

    @Field(() => String, { description: 'Email of the user' })
    email: string;

    @Field(() => [String], { description: 'Roles of the user' })
    roles: string[];

    @Field(() => String, { description: 'Password of the user' })
    password: string;
}

export default AddUserInput;
