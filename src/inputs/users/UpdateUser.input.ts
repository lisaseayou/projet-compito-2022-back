import { IsEmail, Length, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class UpdateUserInput {
    @Field(() => String, { nullable: true, description: 'Name of the user' })
    @Length(3, 30, { message: errors.user.name })
    name?: string;

    @Field(() => String, { nullable: true, description: 'Email of the user' })
    @IsEmail({}, { message: errors.user.email })
    email?: string;

    @Field(() => [String], { nullable: true, description: 'Roles of the user' })
    roles?: string[];

    @Field(() => String, {
        nullable: true,
        description: 'Password of the user',
    })
    @MinLength(8, { message: errors.user.password })
    password?: string;
}

export default UpdateUserInput;
