import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import Task from './Task.model';

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
}

export default Comment;
