import { Length } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class AddDocumentInput {
    @Field(() => String, { description: 'Name of uploader file' })
    @Length(3, 500, { message: errors.document.name })
    name: string;

    @Field(() => Int, { description: 'Size of uploader file' })
    size: number;

    @Field(() => String, { description: 'Task related to the file' })
    taskId: string;
}

export default AddDocumentInput;
