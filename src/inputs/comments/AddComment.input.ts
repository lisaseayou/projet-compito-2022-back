import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import errors from '../../utils/validation';

@InputType()
class AddCommentInput {
    @Field(() => String, { description: 'Content of the comment' })
    @Length(2, 100, { message: errors.comment.comment })
    comment: string;

    @Field(() => String, {
        nullable: true,
        description: 'ID of the task to link to the comment',
    })
    taskId?: string;

    @Field(() => String, {
        nullable: true,
        description: 'ID of the user to link to the comment',
    })
    userId: string;
}

export default AddCommentInput;
