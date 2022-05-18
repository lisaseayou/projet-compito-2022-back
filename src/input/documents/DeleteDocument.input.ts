import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DeleteDocumentInput {
    @Field(() => ID)
    id: string
}

export default DeleteDocumentInput;