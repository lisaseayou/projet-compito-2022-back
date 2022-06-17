import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateProjectType {
    @Field(() => ID, { description: 'Description of the project' })
    id: string;

    @Field(() => String, { description: 'Name of the project', nullable: true })
    name?: string;

    @Field(() => String, {
        description: 'Description of the project',
        nullable: true,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
        description: 'ID of the user to link to the project',
    })
    userId?: string;
}

export default UpdateProjectType;
