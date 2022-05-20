import { ObjectType, Field, ID, Int, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
// import Task from './Task.model';

@ObjectType()
class Document {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => Int)
    size: number;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    // @Field(() => Task)
    // task: Task;
}

export default Document;
