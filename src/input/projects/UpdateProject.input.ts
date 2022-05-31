import { ArgsType, Field, GraphQLISODateTime, ID } from 'type-graphql';

@ArgsType()
class UpdateProjectType {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => String, { nullable: true })
    userId?: string;
}

export default UpdateProjectType;
