import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddNotificationInput {
    @Field(() => String)
    description: string;

    @Field(() => Boolean)
    isRead: boolean;

    @Field(() => String)
    userId: string;
}

export default AddNotificationInput;
