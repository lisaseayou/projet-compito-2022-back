import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class AddProjectInput {
    @Field(() => String, { description: 'Name of the project' })
    @Length(3, 100, { message: errors.project.name })
    name: string;

    @Field(() => String, { description: 'Description of the project' })
    description: string;

    @Field(() => String, {
        description: 'ID of the user to link to the project',
    })
    userId: string;
}

export default AddProjectInput;
