import { InputType, Field, Int } from 'type-graphql';

@InputType()
class AddDocumentInput {
    @Field(() => String, { description: 'Name of uploader file' })
    name: string;

    @Field(() => Int, { description: 'Size of uploader file' })
    size: number;

    @Field(() => String, { description: 'Task related to the file' })
    taskId: string;
}

export default AddDocumentInput;
