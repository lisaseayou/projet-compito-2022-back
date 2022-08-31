import { ApolloError } from 'apollo-server-core';

class DeleteNotFoundError extends ApolloError {
    constructor(message: string, extensions?: Record<string, any>) {
        super(message, 'DELETE_RECORD_NOT_FOUND', extensions);

        Object.defineProperty(this, 'name', { value: 'DeleteNotFoundError' });
    }
}

export default DeleteNotFoundError;
