import { InputType, Field } from 'type-graphql';

@InputType()
class AddNotificationInput {
    @Field(() => String, { description: 'Description of the notification' })
    description: string;

    @Field(() => Boolean, {
        description: 'Status of the notification, read or not',
    })
    isRead: boolean;

    @Field(() => String, {
        description: 'ID of the user to link to the notification',
    })
    userId: string;
}

export default AddNotificationInput;
