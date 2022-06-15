/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, Int, GraphQLISODateTime } from 'type-graphql';
import Comment from './Comment.model';
import Document from './Document.model';
import Project from './Project.model';
import User from './User.model';

@ObjectType()
class Task {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    subject: string;

    @Field(() => String)
    status: string;

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
