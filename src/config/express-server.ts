import { PrismaClient } from '@prisma/client';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import getApolloServer from './getApolloServer';

const getExpressServer = async (
    resolversPath: string,
    corsConfig: any
): Promise<{
    expressServer: Express.Application;
    apolloServer: ApolloServer;
    graphQLSchema: GraphQLSchema;
}> => {
    // init client prisma
    const prisma = new PrismaClient({ rejectOnNotFound: { findUnique: true } });

    // Create server with express
    const expressServer = express();
    expressServer.use(cors(corsConfig));
    expressServer.use(cookieParser());

    const httpServer = createServer(expressServer);

    const { server: apolloServer, schema: graphQLSchema } =
        await getApolloServer(resolversPath, prisma, httpServer);

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app: expressServer,
        cors: false,
        path: '/',
    });

    return { expressServer, apolloServer, graphQLSchema };
};

export default getExpressServer;
