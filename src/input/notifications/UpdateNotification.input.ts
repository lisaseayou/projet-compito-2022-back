import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateNotificationType {
    @Field(() => ID, { description: 'Id of the notification' })
    id: string;

    @Field(() => String, {
        nullable: true,
        description: 'Description of the notification',
    })
    description?: string;

    @Field(() => Boolean, {
        nullable: true,
        description: 'Status of the notification, read or not',
    })
    isRead?: boolean;

    @Field(() => String, {
        description: 'ID of the user to link to the notification',
    })
    userId: string;
}

export default UpdateNotificationType;
