import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class AddNotificationInput {
    @Field(() => String, { description: 'Description of the notification' })
    @Length(3, 250, { message: errors.notification.description })
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
