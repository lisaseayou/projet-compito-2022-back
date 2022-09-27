import { IsEmail, Length, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import Role from '../../enums/Role.enum';
import errors from '../../utils/validation';

@InputType()
class AddUserInput {
    @Field(() => String, { description: 'Name of the user' })
    @Length(3, 30, { message: errors.user.name })
    name: string;

    @Field(() => String, { description: 'Email of the user' })
    @IsEmail({}, { message: errors.user.email })
    email: string;

    @Field(() => [Role], { description: 'Roles of the user' })
    roles: Role[];

    @Field(() => String, { description: 'Password of the user' })
    @MinLength(8, { message: errors.user.password })
    password: string;

    @Field(() => String, { description: 'Password confirm of the user' })
    @MinLength(8, { message: errors.user.password })
    passwordConfirm: string;

    @Field(() => String, {
        nullable: true,
        description: 'Web site of the user',
    })
    url?: string;

    @Field(() => String, {
        nullable: true,
        description: 'twitter username of the user',
    })
    twitter?: string;

    @Field(() => String, {
        nullable: true,
        description: 'linkedin username of the user',
    })
    linkedin?: string;

    @Field(() => String, {
        nullable: true,
        description: 'Github username of the user',
    })
    github?: string;

    @Field(() => String, {
        nullable: true,
        description: 'description of the user',
    })
    description?: string;
}

export default AddUserInput;
