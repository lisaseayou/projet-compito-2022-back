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

    @Query(() => [Project, Query], {
        description: 'Get all projects',
        nullable: true,
    })
    async allProjects(@Ctx() ctx: { prisma: any }) {
        return this?.projectService?.findAll(ctx);
    }

    @Query(() => Project, {
        description: 'Get one project by id',
        nullable: false,
    })
    async project(
        @Args() { id }: DeleteProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.findOne(ctx, id);
    }

    @Mutation(() => Project, {
        description: 'Add new project',
        nullable: false,
    })
    async addProject(
        @Args() { name, description, userId }: AddProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.save(ctx, name, description, userId);
    }

    @Mutation(() => Project, {
        description: 'Delete project by id',
    })
    async deleteProject(
        @Args() { id }: DeleteProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.deleteOne(ctx, id);
    }

    @Mutation(() => Project, {
        description: 'Update project by id',
    })
    async updateProject(
        @Args() { id, name, description, userId }: UpdateProjectType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.updateOne(
            ctx,
            id,
            name,
            description,
            userId
        );
    }
}

export default ProjectResolver;
