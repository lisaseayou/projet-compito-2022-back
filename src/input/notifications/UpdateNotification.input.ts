import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateNotificationType {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => Boolean, { nullable: true })
    isRead?: boolean;

    @Field(() => String)
    userId: string;
}

export default UpdateNotificationType;
