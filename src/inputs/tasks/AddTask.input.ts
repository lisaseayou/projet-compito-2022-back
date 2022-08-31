import { Length } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class AddTaskInput {
    @Field(() => String)
    @Length(3, 100, { message: errors.task.subject })
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

    @Field(() => String)
    projectId: string;

    @Field(() => String)
    userId: string;
}

export default AddTaskInput;
