import { ObjectType, Field, ID, GraphQLISODateTime } from 'type-graphql';
// eslint-disable-next-line import/no-cycle
import Task from './Task.model';

@ObjectType()
class Project {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => GraphQLISODateTime)
    createdAt: Date;

    @Field(() => GraphQLISODateTime)
    updatedAt: Date;

    @Field(() => [Task], { nullable: true })
    tasks?: Task[];
}

export default Project;
