import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import Document from '../models/Document.model';
import DocumentService from '../services/Document.service';
import AddDocumentInput from '../inputs/documents/AddDocument.input';
import { IContext } from '../interfaces';

@Service()
@Resolver(Document)
class DocumentResolver {
    constructor(private readonly documentService: DocumentService) {}

    @Query(() => [Document, Query], {
        description: 'Get all uploaded files',
    })
    async allDocuments(@Ctx() ctx: IContext) {
        return this?.documentService?.findAll(ctx);
    }

    @Mutation(() => Document, {
        description: 'Save new uploaded file',
    })
    async addDocument(
        @Arg('data') data: AddDocumentInput,
        @Ctx() ctx: IContext
    ) {
        return this?.documentService?.save(ctx, data);
    }

    @Mutation(() => Document, { description: 'Delete uploaded file by id' })
    async deleteDocument(@Arg('id') id: string, @Ctx() ctx: IContext) {
        return this?.documentService?.deleteOne(ctx, id);
    }
}

export default DocumentResolver;
