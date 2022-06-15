import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import Task from '../models/Task.model';
import AddTaskType from '../input/tasks/AddTask.input';
import DeleteTaskType from '../input/Delete.input';
import UpdateTaskType from '../input/tasks/UpdateTask.input';
import TaskService from '../services/Task.service';

@Service()
@Resolver(Task)
class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [Task, Query])
    async allTasks(@Ctx() ctx: { prisma: any }) {
        return this?.taskService?.findAll(ctx);
    }

    @Mutation(() => Task)
    async addTask(
        @Args()
        {
            subject,
            status,
            dueDate,
            initialSpentTime,
            additionalSpentTime,
            advancement,
            projectId,
            userId,
        }: AddTaskType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.taskService?.save(
            ctx,
            subject,
            status,
            dueDate,
            initialSpentTime,
            additionalSpentTime,
            advancement,
            projectId,
            userId
        );
    }

    @Mutation(() => Task)
    async deleteTask(
        @Args()
        { id }: DeleteTaskType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.taskService?.deleteOne(ctx, id);
    }

    @Mutation(() => Task)
    async updateTask(
        @Args()
        {
            id,
            subject,
            status,
            dueDate,
            additionalSpentTime,
            advancement,
            projectId,
            userId,
        }: UpdateTaskType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.taskService?.updateOne(
            ctx,
            id,
            subject,
            status,
            dueDate,
            additionalSpentTime,
            advancement,
            projectId,
            userId
        );
    }
}

export default TaskResolver;
