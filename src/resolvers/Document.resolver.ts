import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import Document from '../models/Document.model';
import AddDocumentType from '../input/documents/AddDocument.input';
import DeleteDocumentType from '../input/Delete.input';

@Resolver(Document)
class DocumentResolver {

    @Query(() => [Document, Query])
    async allDocuments(@Ctx() ctx: { prisma: any }) {
        return ctx.prisma.document.findMany();
    }

    @Mutation(() => Document)
    async addDocument(@Args() { name }: AddDocumentType, @Ctx() ctx: { prisma: any }) {
        const documentToDb = await ctx.prisma.document.create({ data: { name } });
        return documentToDb;
    }

    @Mutation(() => Document)
    async deleteDocument(
        @Args() { id }: DeleteDocumentType,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx.prisma.document.delete({ where: { id } });
        return currentDocument;
    }
}

export default DocumentResolver;
