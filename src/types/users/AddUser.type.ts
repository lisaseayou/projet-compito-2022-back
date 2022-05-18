import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddUserInput {
    @Field(() => String)
    name: string
}

export default AddUserInput