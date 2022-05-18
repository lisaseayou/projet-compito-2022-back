import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddProjectInput {
    @Field(() => String)
    name: string
}

export default AddProjectInput;