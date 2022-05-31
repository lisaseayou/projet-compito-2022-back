import { ArgsType, Field, GraphQLISODateTime, Int } from 'type-graphql';

@ArgsType()
class AddDocumentInput {
    @Field(() => String)
    name: string;

    @Field(() => Int)
    size: number;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => String)
    taskId: string;
}

export default AddDocumentInput;
