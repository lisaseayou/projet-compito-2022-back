import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddDocumentInput {
    @Field(() => String)
    name: string
}

export default AddDocumentInput;