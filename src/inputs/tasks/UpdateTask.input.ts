import { Length } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';
import Status from '../../enums/Status.enum';
import errors from '../../utils/validation';

@InputType()
class UpdateTaskInput {
    @Field(() => String, { nullable: true })
    @Length(3, 100, { message: errors.task.name })
    name?: string;

    @Field(() => String, { description: 'description of the task', nullable: true })
    @Length(3, 250, { message: errors.task.description })
    description?: string;

    @Field(() => Status, { nullable: true })
    status?: Status;

    @Field(() => Int, { nullable: true })
    view?: number;

    @Field(() => String, { nullable: true })
    dueDate?: string;

    @Field(() => Int, { nullable: true })
    initialSpentTime?: number;

    @Field(() => [Int], { nullable: true })
    additionalSpentTime?: number[];

    @Field(() => Int, { nullable: true })
    advancement?: number;

    @Field(() => String)
    projectId: string;

    @Field(() => String, { nullable: true })
    userId?: string;
}

export default UpdateTaskInput;
