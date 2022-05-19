import { ArgsType, Field, GraphQLISODateTime, Int } from 'type-graphql';

@ArgsType()
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

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}

export default AddTaskInput;
