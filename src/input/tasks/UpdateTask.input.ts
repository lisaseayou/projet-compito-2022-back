import { ArgsType, Field, GraphQLISODateTime, ID, Int } from 'type-graphql';

@ArgsType()
class UpdateTaskType {
    @Field(() => ID)
    id: string;

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

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => String)
    projectId: string;

    @Field(() => String, { nullable: true })
    userId?: string;
}

export default UpdateTaskType;
