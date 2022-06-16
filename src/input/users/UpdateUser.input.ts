import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateUserType {
    @Field(() => ID, { description: 'Id of the user' })
    id: string;

    @Field(() => String, { nullable: true, description: 'Name of the user' })
    name?: string;

    @Field(() => String, { nullable: true, description: 'Email of the user' })
    email?: string;

    @Field(() => [String], { nullable: true, description: 'Roles of the user' })
    roles?: string[];

    @Field(() => String, {
        nullable: true,
        description: 'Password of the user',
    })
    password?: string;
}

export default UpdateUserType;
