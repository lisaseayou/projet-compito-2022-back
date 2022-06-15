import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Task from '../models/Task.model';
import AddTaskType from '../input/tasks/AddTask.input';
import DeleteTaskType from '../input/Delete.input';
import UpdateTaskType from '../input/tasks/UpdateTask.input';

@Resolver(Task)
class TaskResolver {
    @Query(() => [Task, Query])
    async allTasks(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.task.findMany({
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
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
        const taskToDb = await ctx.prisma.task.create({
            data: {
                subject,
                status,
                dueDate,
                initialSpentTime,
                additionalSpentTime,
                advancement,
                project: {
                    connect: { id: projectId },
                },
                users: {
                    connect: [{ id: userId }],
                },
            },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
        return taskToDb;
    }

    @Mutation(() => Task)
    async deleteTask(
        @Args()
        { id }: DeleteTaskType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentTask = ctx.prisma.task.delete({
            where: {
                id,
            },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
        return currentTask;
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
        const taskToUpdate = ctx.prisma.task.findUnique({
            where: { id },
        });

        const taskUpdated = ctx.prisma.task.update({
            where: { id },
            data: {
                subject: taskToUpdate.subject ?? subject,
                status: taskToUpdate.status ?? status,
                dueDate: taskToUpdate.dueDate ?? dueDate,
                additionalSpentTime:
                    taskToUpdate.additionalSpentTime ?? additionalSpentTime,
                advancement: taskToUpdate.advancement ?? advancement,
                project: {
                    connect: { id: projectId },
                },
                users: userId
                    ? {
                          connect: [{ id: userId }],
                      }
                    : {},
            },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });

        return taskUpdated;
    }
}

export default TaskResolver;
