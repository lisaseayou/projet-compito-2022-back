import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import User from './User.model';

@ObjectType()
class Notification {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    description: string;

    @Field(() => Boolean)
    isRead: boolean;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => User)
    user: User;
}

export default Notification;
