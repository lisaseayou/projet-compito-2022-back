import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddProjectInput {
    @Field(() => String, { description: 'Name of the project' })
    name: string;

    @Field(() => String, { description: 'Description of the project' })
    description: string;

    @Field(() => String, {
        description: 'ID of the user to link to the project',
    })
    userId: string;
}

export default AddProjectInput;
