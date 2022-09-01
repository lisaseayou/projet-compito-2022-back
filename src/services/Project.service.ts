import { Service } from 'typedi';
import UpdateProjectInput from '../inputs/projects/UpdateProject.input';
import AddProjectInput from '../inputs/projects/AddProject.input';
import { IContext } from '../interfaces';
import RecordNotFoundError from '../errors/RecordNotFound.error';
import DeleteNotFoundError from '../errors/DeleteNotFound.error';

@Service()
class ProjectService {
    async findAll(ctx: IContext) {
        return ctx.prisma.project.findMany({
            include: {
                tasks: true,
                users: true,
            },
        });
    }

    async findOne(ctx: IContext, id: string) {
        return ctx.prisma.project.findUnique({
            where: { id },
            include: {
                tasks: true,
                users: true,
            },
            rejectOnNotFound: new RecordNotFoundError(
                "Le projet avec cet id n'existe pas"
            ),
        });
    }

    async findLast(ctx: IContext, number: number) {
        return ctx.prisma.project.findMany({
            take: number,
            orderBy: { updatedAt: 'desc' },
            include: {
                tasks: true,
                users: true,
            },
        });
    }

    async save(ctx: IContext, data: AddProjectInput) {
        const { name, description, userId } = data;

        const projectToDb = await ctx.prisma.project.create({
            data: {
                name,
                description,
                users: {
                    connect: [{ id: userId }],
                },
            },
            include: {
                tasks: true,
                users: true,
            },
        });

        return projectToDb;
    }

    async updateOne(ctx: IContext, id: string, data: UpdateProjectInput) {
        const { name, description, userId } = data;

        const projectUpdated = ctx.prisma.project.update({
            where: { id },
            data: {
                name,
                description,
                users: userId
                    ? {
                          connect: [{ id: userId }],
                      }
                    : {},
            },
            include: {
                tasks: true,
                users: true,
            },
        });
        return projectUpdated;
    }

    async deleteOne(ctx: IContext, id: string) {
        const currentProject = await ctx.prisma.project
            .delete({
                where: { id },
                include: {
                    tasks: true,
                    users: true,
                },
            })
            .catch(() => {
                throw new DeleteNotFoundError(
                    "Le projet à supprimer n'existe pas"
                );
            });

        return currentProject;
    }
}

export default ProjectService;
