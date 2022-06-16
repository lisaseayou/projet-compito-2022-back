import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import User from './User.model';

@ObjectType()
class Notification {
    @Field(() => ID, { description: 'Id of the notification' })
    id: string;

    @Field(() => String, { description: 'Description of the notification' })
    description: string;

    @Field(() => Boolean, {
        description: 'Status of the notification, read or not',
    })
    isRead: boolean;

    @Field(() => GraphQLISODateTime, {
        description: 'Notification creation date',
    })
    createdAt: Date;

    @Field(() => User, { description: 'User related to the notification' })
    user: User;
}

export default Notification;
