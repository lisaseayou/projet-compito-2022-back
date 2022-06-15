import { Resolver, Query, Ctx, Mutation, Args } from 'type-graphql';
import { Service } from 'typedi';
import Document from '../models/Document.model';
import AddDocumentType from '../input/documents/AddDocument.input';
import DeleteDocumentType from '../input/Delete.input';
import DocumentService from '../services/Document.service';

@Service()
@Resolver(Document)
class DocumentResolver {
    constructor(private readonly documentService: DocumentService) {}

    @Query(() => [Document, Query])
    async allDocuments(@Ctx() ctx: { prisma: any }) {
        return this?.documentService?.findAll(ctx);
    }

    @Mutation(() => Document)
    async addDocument(
        @Args() { name, size, taskId }: AddDocumentType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.documentService?.save(ctx, name, size, taskId);
    }

    @Mutation(() => Document)
    async deleteDocument(
        @Args() { id }: DeleteDocumentType,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.documentService?.deleteOne(ctx, id);
    }
}

export default DocumentResolver;
