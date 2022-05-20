import { ArgsType, Field, GraphQLISODateTime, ID } from 'type-graphql';

@ArgsType()
class UpdateUserType {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => [String], { nullable: true })
    roles?: string[];

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}

export default UpdateUserType;
