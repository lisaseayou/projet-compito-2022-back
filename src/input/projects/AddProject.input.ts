import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddProjectInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    userId: string;
}

export default AddProjectInput;
