import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DeleteUserInput {
    @Field(() => ID)
    id: string
}

export default DeleteUserInput; 