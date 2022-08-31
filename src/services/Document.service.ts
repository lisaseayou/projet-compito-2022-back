import { Service } from 'typedi';
import AddDocumentInput from '../inputs/documents/AddDocument.input';
import { IContext } from '../interfaces';

@Service()
class DocumentService {
    async findAll(ctx: IContext) {
        return ctx.prisma.document.findMany({
            include: {
                task: true,
            },
        });
    }

    async save(ctx: IContext, data: AddDocumentInput) {
        const { name, size, taskId } = data;

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

    async deleteOne(ctx: IContext, id: string) {
        const currentDocument = ctx.prisma.document.delete({
            where: { id },
            include: {
                task: true,
            },
        });
        return currentDocument;
    }
}

export default DocumentService;
