import { ArgsType, Field, GraphQLISODateTime, ID } from 'type-graphql';

@ArgsType()
class UpdateNotificationType {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => Boolean, { nullable: true })
    isRead?: boolean;

    @Field(() => GraphQLISODateTime, { nullable: true })
    createdAt?: Date;
}

export default UpdateNotificationType;
