import { Length } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';
import Status from '../../enums/Status.enum';
import errors from '../../utils/validation';

@InputType()
class AddTaskInput {
    @Field(() => String)
    @Length(3, 100, { message: errors.task.name })
    name: string;

    @Field(() => String, { description: 'description of the task' })
    @Length(3, 250, { message: errors.task.description })
    description: string;

    @Field(() => Status)
    status: Status;

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
