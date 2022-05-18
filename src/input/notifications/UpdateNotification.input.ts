import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateNotificationType {
    @Field(() => ID)
    id: string

    @Field(() => Boolean)
    isRead?: boolean
}

export default UpdateNotificationType;