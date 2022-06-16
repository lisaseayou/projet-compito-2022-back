import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DeleteInput {
    @Field(() => ID, { description: 'ID of the data to delete' })
    id: string;
}

export default DeleteInput;
