import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddDocumentInput {
    @Field(() => String)
    name: string;

    @Field(() => Int)
    size: number;

    @Field(() => String)
    taskId: string;
}

export default AddDocumentInput;
