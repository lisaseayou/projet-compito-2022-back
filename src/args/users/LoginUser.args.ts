import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class LoginUserArgs {
    @Field(() => String, { description: 'Name of the user' })
    email: string;

    @Field(() => String, { description: 'Password of the user' })
    password: string;
}

export default LoginUserArgs;
