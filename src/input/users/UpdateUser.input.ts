import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateUserType {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name?: string
}

export default UpdateUserType;