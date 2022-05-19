import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateProjectType {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name?: string
}

export default UpdateProjectType;