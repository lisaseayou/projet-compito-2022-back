import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Project from '../models/Project.model';
import AddProjectType from '../input/projects/AddProject.input';
import DeleteProjectType from '../input/Delete.input';
import UpdateProjectType from '../input/projects/UpdateProject.input';

@Resolver(Project)
class ProjectResolver {

    @Query(() => [Project, Query])
    async allProjects(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.project.findMany();
    }

    @Mutation(() => Project)
    async addProject(@Args() { name }: AddProjectType, @Ctx() ctx: { prisma: any }) {
        const projectToDb = await ctx.prisma.project.create({ data: { name } });
        return projectToDb;
    }

    @Mutation(() => Project)
    async deleteProject(
        @Args() { id }: DeleteProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentProject = ctx.prisma.project.delete({ where: { id } });
        return currentProject;
    }

    @Mutation(() => Project)
    async updateProject(
        @Args() { id, name }: UpdateProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        const projectToUpdate = ctx.prisma.project.update({
            where: { id },
            data: { name },
        });
        return projectToUpdate;
    }
}

export default ProjectResolver;
