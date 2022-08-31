import { InputType, Field, Int } from 'type-graphql';

@InputType()
class UpdateTaskInput {
    @Field(() => String, { nullable: true })
    subject?: string;

    @Field(() => String, { nullable: true })
    status?: string;

    @Field(() => String, { nullable: true })
    dueDate?: string;

    @Field(() => [Int], { nullable: true })
    additionalSpentTime?: [number];

    @Field(() => Int, { nullable: true })
    advancement?: number;

    @Field(() => String)
    projectId: string;

    @Field(() => String, { nullable: true })
    userId?: string;
}

export default UpdateTaskInput;
