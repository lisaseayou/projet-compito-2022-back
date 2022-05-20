import { ArgsType, Field, GraphQLISODateTime } from 'type-graphql';

@ArgsType()
class AddNotificationInput {
    @Field(() => String)
    description: string;

    @Field(() => Boolean)
    isRead: boolean;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => String)
    userId: string;
}

export default AddNotificationInput;
