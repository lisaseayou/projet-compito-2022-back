import { ApolloError } from 'apollo-server-core';

class RecordNotFoundError extends ApolloError {
    constructor(message: string, extensions?: Record<string, any>) {
        super(message, 'RECORD_NOT_FOUND', extensions);

        Object.defineProperty(this, 'name', { value: 'NotFoundError' });
    }
}

export default RecordNotFoundError;
