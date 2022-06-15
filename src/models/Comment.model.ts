/* eslint-disable import/no-cycle */
import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
import Task from './Task.model';
import User from './User.model';

@ObjectType()
class Comment {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    comment: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => Task)
    task: Task;

    @Field(() => User)
    user: User;
}

export default Comment;
