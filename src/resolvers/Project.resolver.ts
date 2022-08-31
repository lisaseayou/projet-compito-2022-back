import { Arg, Resolver, Query, Ctx, Mutation } from 'type-graphql';
import { Service } from 'typedi';
import Project from '../models/Project.model';
import ProjectService from '../services/Project.service';
import AddProjectInput from '../inputs/projects/AddProject.input';
import UpdateProjectInput from '../inputs/projects/UpdateProject.input';

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
    async project(@Arg('id') id: string, @Ctx() ctx: { prisma: any }) {
        return this?.projectService?.findOne(ctx, id);
    }

    @Mutation(() => Project, {
        description: 'Add new project',
        nullable: false,
    })
    async addProject(
        @Arg('data') data: AddProjectInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.save(ctx, data);
    }

    @Mutation(() => Project, {
        description: 'Delete project by id',
    })
    async deleteProject(@Arg('id') id: string, @Ctx() ctx: { prisma: any }) {
        return this?.projectService?.deleteOne(ctx, id);
    }

    @Mutation(() => Project, {
        description: 'Update project by id',
    })
    async updateProject(
        @Arg('id') id: string,
        @Arg('data') data: UpdateProjectInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.projectService?.updateOne(ctx, id, data);
    }
}

export default ProjectResolver;
