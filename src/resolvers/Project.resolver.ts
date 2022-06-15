import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import Project from '../models/Project.model';
import AddProjectType from '../input/projects/AddProject.input';
import DeleteProjectType from '../input/Delete.input';
import UpdateProjectType from '../input/projects/UpdateProject.input';
import ProjectService from '../services/Project.service';

@Service()
@Resolver(Project)
class ProjectResolver {
    constructor(private readonly projectService: ProjectService) {}

    @Query(() => [Project, Query])
    async allProjects(@Ctx() ctx: { prisma: any }) {
        return this?.projectService?.findAll(ctx);
    }

    @Mutation(() => Project)
    async addProject(
        @Args() { name, userId }: AddProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.save(ctx, name, userId);
    }

    @Mutation(() => Project)
    async deleteProject(
        @Args() { id }: DeleteProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.deleteOne(ctx, id);
    }

    @Mutation(() => Project)
    async updateProject(
        @Args() { id, name, userId }: UpdateProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.updateOne(ctx, id, name, userId);
    }
}

export default ProjectResolver;
