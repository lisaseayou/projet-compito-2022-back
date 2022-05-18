import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddNotificationInput {
    @Field(() => String)
    description: string
}

export default AddNotificationInput;