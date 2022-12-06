/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, Int, GraphQLISODateTime } from 'type-graphql';
import Comment from './Comment.model';
import Document from './Document.model';
import Project from './Project.model';
import User from './User.model';

@ObjectType()
class Task {
    @Field(() => ID, { description: 'Id of the task' })
    id: string;

    @Field(() => String, { description: 'title of the task' })
    name: string;

    @Field(() => String, { description: 'description of the task' })
    description: string;

    @Field(() => String, { description: 'Status of the task' })
    status: string;

    @Field(() => Int, { description: 'Number of view of the task' })
    view: number;

    @Field(() => String)
    dueDate: string;

    @Field(() => Int)
    initialSpentTime: number;

    @Field(() => [Int])
    additionalSpentTime: [number];

    @Field(() => Int)
    advancement: number;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => Project, { nullable: true })
    project: Project;

    @Field(() => [Comment], { nullable: true })
    comments?: Comment[];

    @Field(() => [Document], { nullable: true })
    documents?: Document[];

    @Field(() => [User], { nullable: true })
    users?: User[];
}

export default Task;
