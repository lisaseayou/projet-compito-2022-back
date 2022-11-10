import { Service } from 'typedi';
import AddTaskInput from '../inputs/tasks/AddTask.input';
import UpdateTaskInput from '../inputs/tasks/UpdateTask.input';
import { IContext } from '../interfaces';
import RecordNotFoundError from '../errors/RecordNotFound.error';

@Service()
class TaskService {
    async findAll(ctx: IContext) {
        return ctx.prisma.task.findMany({
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
    }

    async findByProject(ctx: IContext, projectId: string) {
        return ctx.prisma.task.findMany({
            where: { project: { is: { id: projectId } } },
            orderBy: { updatedAt: 'asc' },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
    }

    async findByDay(ctx: IContext, userId: string, limit: number) {
        return ctx.prisma.task.findMany({
            where: { users: { some: { id: userId } } },
            take: limit,
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
    }

    async findOne(ctx: IContext, id: string) {
        return ctx.prisma.task.findUnique({
            where: { id },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
            rejectOnNotFound: new RecordNotFoundError(
                "Le projet avec cet id n'existe pas"
            ),
        });
    }

    async findLast(ctx: IContext, limit: number) {
        return ctx.prisma.project.findMany({
            take: limit,
            orderBy: { updatedAt: 'desc' },
            include: {
                project: true,
                comments: true,
                documents: true,
                users: true,
            },
        });
    }

    async save(ctx: IContext, data: AddTaskInput) {
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

    async updateOne(ctx: IContext, id: string, data: UpdateTaskInput) {
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

    async deleteOne(ctx: IContext, id: string) {
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
