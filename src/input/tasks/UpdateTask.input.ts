import {ArgsType, Field, ID, Int} from 'type-graphql';

@ArgsType()
class UpdateTaskType {
    @Field(() => ID)
    id: string

    @Field(() => String)
    subject?: string

    @Field(() => String)
    status?: string

    @Field(() => String)
    dueDate?: string

    @Field(() => [Int])
    additionalSpentTime?: [number]

    @Field(() => Int)
    advancement?: number
}

export default UpdateTaskType;