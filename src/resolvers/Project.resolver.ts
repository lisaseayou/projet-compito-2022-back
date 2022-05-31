import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Project from '../models/Project.model';
import AddProjectType from '../input/projects/AddProject.input';
import DeleteProjectType from '../input/Delete.input';
import UpdateProjectType from '../input/projects/UpdateProject.input';

@Resolver(Project)
class ProjectResolver {
    @Query(() => [Project, Query])
    async allProjects(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.project.findMany({
            include: {
                tasks: true,
                users: true,
            },
        });
    }

    @Mutation(() => Project)
    async addProject(
        @Args() { name, createdAt, updatedAt, userId }: AddProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        const projectToDb = await ctx.prisma.project.create({
            data: {
                name,
                createdAt,
                updatedAt,
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

    @Mutation(() => Project)
    async deleteProject(
        @Args() { id }: DeleteProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentProject = ctx.prisma.project.delete({
            where: { id },
            include: {
                tasks: true,
                users: true,
            },
        });
        return currentProject;
    }

    @Mutation(() => Project)
    async updateProject(
        @Args() { id, name, updatedAt, userId }: UpdateProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        const projectUpdated = ctx.prisma.project.update({
            where: { id },
            data: {
                name,
                updatedAt,
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
}

export default ProjectResolver;
