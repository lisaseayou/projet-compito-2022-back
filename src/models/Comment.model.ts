/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
import Task from './Task.model';
import User from './User.model';

@ObjectType()
class Comment {
    @Field(() => ID, { description: 'Id of the comment' })
    id: string;

    @Field(() => String, { description: 'Content of the comment' })
    comment: string;

    @Field(() => GraphQLISODateTime, { description: 'Comment creation date' })
    createdAt: Date;

    @Field(() => GraphQLISODateTime, {
        description: 'Date of last modification of the comment',
    })
    updatedAt: Date;

    @Field(() => Task, { description: 'Task related to the comment' })
    task: Task;

    @Field(() => User, { description: 'User related to the comment' })
    user: User;
}

export default Comment;
