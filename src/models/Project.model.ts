/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
import Task from './Task.model';
import User from './User.model';

@ObjectType()
class Project {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => [Task], { nullable: true })
    tasks?: Task[];

    @Field(() => [User], { nullable: true })
    users?: User[];
}

export default Project;
