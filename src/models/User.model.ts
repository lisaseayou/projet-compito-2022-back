import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import Notification from './Notification.model';

@ObjectType()
class User {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => [String])
    roles: string[];

    @Field(() => String)
    password: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => [Notification], { nullable: true })
    notifications?: Notification[];
}

export default User;
