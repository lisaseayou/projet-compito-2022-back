import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddTaskInput {
    @Field(() => String)
    subject: string
}

export default AddTaskInput;