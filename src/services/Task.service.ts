import { Service } from 'typedi';
import AddTaskInput from '../inputs/tasks/AddTask.input';
import UpdateTaskInput from '../inputs/tasks/UpdateTask.input';

@Service()
class TaskService {
    async findAll(ctx: any) {
        return ctx.prisma.task.findMany({
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
    }

    async save(ctx: any, data: AddTaskInput) {
        const {
            subject,
            status,
            dueDate,
            initialSpentTime,
            additionalSpentTime,
            advancement,
            projectId,
            userId,
        } = data;

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

    async updateOne(ctx: any, id: string, data: UpdateTaskInput) {
        const {
            subject,
            status,
            dueDate,
            additionalSpentTime,
            advancement,
            projectId,
            userId,
        } = data;
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

    async deleteOne(ctx: any, id: string) {
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
}

export default TaskService;
