/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';

import Notification from './Notification.model';
import Project from './Project.model';

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

    @Field(() => [Project], { nullable: true })
    projects?: Project[];
}

export default User;
