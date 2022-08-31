import { InputType, Field, Int } from 'type-graphql';

@InputType()
class AddTaskInput {
    @Field(() => String)
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
