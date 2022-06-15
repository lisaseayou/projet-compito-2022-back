/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
import Comment from './Comment.model';
import Notification from './Notification.model';
import Project from './Project.model';
import Task from './Task.model';

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

    @Field(() => [Comment], { nullable: true })
    comments?: Comment[];

    @Field(() => [Project], { nullable: true })
    projects?: Project[];

    @Field(() => [Task], { nullable: true })
    tasks?: Task[];
}

export default User;
