import { ArgsType, Field, GraphQLISODateTime } from 'type-graphql';

@ArgsType()
class AddProjectInput {
    @Field(() => String)
    name: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => String)
    userId: string;
}

export default AddProjectInput;
