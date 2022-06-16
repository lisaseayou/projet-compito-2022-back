import { ObjectType, Field, ID, Int, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import Task from './Task.model';

@ObjectType()
class Document {
    @Field(() => ID, { description: 'ID of uploaded file' })
    id: string;

    @Field(() => String, { description: 'Name of uploader file' })
    name: string;

    @Field(() => Int, { description: 'Size of uploader file' })
    size: number;

    @Field(() => GraphQLISODateTime, {
        description: 'File upload date',
    })
    createdAt: Date;

    @Field(() => Task, { description: 'ID of the task related to the file' })
    task: Task;
}

export default Document;
