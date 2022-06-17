/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
import Task from './Task.model';
import User from './User.model';

@ObjectType()
class Project {
    @Field(() => ID, { description: 'Id of the project' })
    id: string;

    @Field(() => String, { description: 'Name of the project' })
    name: string;

    @Field(() => String, { description: 'Description of the project' })
    description: string;

    @Field(() => GraphQLISODateTime, { description: 'Project creation date' })
    createdAt: Date;

    @Field(() => GraphQLISODateTime, {
        description: 'Date of last modification of the project',
    })
    updatedAt: Date;

    @Field(() => [Task], {
        nullable: true,
        description: 'List of tasks related to the project',
    })
    tasks?: Task[];

    @Field(() => [User], {
        nullable: true,
        description: 'list of users related to the project',
    })
    users?: User[];
}

export default Project;
