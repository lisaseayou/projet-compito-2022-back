import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DeleteInput {
    @Field(() => ID)
    id: string
}

export default DeleteInput;