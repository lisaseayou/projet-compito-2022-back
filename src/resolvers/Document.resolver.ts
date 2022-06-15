import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Document from '../models/Document.model';
import AddDocumentType from '../input/documents/AddDocument.input';
import DeleteDocumentType from '../input/Delete.input';

@Resolver(Document)
class DocumentResolver {
    @Query(() => [Document, Query])
    async allDocuments(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.document.findMany({
            include: {
                task: true,
            },
        });
    }

    @Mutation(() => Document)
    async addDocument(
        @Args() { name, size, taskId }: AddDocumentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const documentToDb = await ctx.prisma.document.create({
            data: {
                name,
                size,
                task: {
                    connect: { id: taskId },
                },
            },
            include: {
                task: true,
            },
        });
        return documentToDb;
    }

    @Mutation(() => Document)
    async deleteDocument(
        @Args() { id }: DeleteDocumentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx.prisma.document.delete({
            where: { id },
            include: {
                task: true,
            },
        });
        return currentDocument;
    }
}

export default DocumentResolver;
