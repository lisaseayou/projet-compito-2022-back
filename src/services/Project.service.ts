import { Service } from 'typedi';
import UpdateProjectInput from '../inputs/projects/UpdateProject.input';
import AddProjectInput from '../inputs/projects/AddProject.input';

@Service()
class ProjectService {
    async findAll(ctx: any) {
        return ctx.prisma.project.findMany({
            include: {
                tasks: true,
                users: true,
            },
        });
    }

    async findOne(ctx: any, id: string) {
        return ctx.prisma.project.findUnique({
            where: { id },
            include: {
                tasks: true,
                users: true,
            },
        });
    }

    async save(ctx: any, data: AddProjectInput) {
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

    async updateOne(ctx: any, id: string, data: UpdateProjectInput) {
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

    async deleteOne(ctx: any, id: string) {
        const currentProject = ctx.prisma.project.delete({
            where: { id },
            include: {
                tasks: true,
                users: true,
            },
        });
        return currentProject;
    }
}

export default ProjectService;
