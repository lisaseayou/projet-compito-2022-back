import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import Task from '../models/Task.model';
import TaskService from '../services/Task.service';
import AddTaskInput from '../inputs/tasks/AddTask.input';
import UpdateTaskInput from '../inputs/tasks/UpdateTask.input';

@Service()
@Resolver(Task)
class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [Task, Query], {
        description: 'Get all tasks',
        nullable: true,
    })
    async allTasks(@Ctx() ctx: { prisma: any }) {
        return this?.taskService?.findAll(ctx);
    }

    @Mutation(() => Task, {
        description: 'Add new task',
        nullable: false,
    })
    async addTask(
        @Arg('data') data: AddTaskInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.taskService?.save(
            ctx,

            data
        );
    }

    @Mutation(() => Task, {
        description: 'Delete task by id',
    })
    async deleteTask(@Arg('id') id: string, @Ctx() ctx: { prisma: any }) {
        return this?.taskService?.deleteOne(ctx, id);
    }

    @Mutation(() => Task, {
        description: 'Update task by id',
    })
    async updateTask(
        @Arg('id') id: string,
        @Arg('data') data: UpdateTaskInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.taskService?.updateOne(ctx, id, data);
    }
}

export default TaskResolver;
