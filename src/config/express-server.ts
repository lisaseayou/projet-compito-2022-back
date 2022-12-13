import { PrismaClient } from '@prisma/client';
import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import getApolloServer from './getApolloServer';
import * as core from 'express-serve-static-core';

const getExpressServer = async (
    resolversPath: string,
    corsConfig: any,
    url: string
): Promise<{
    expressServer: core.Express;
    apolloServer: ApolloServer;
    graphQLSchema: GraphQLSchema;
    prisma: any
}> => {
    // init client prisma
    const prisma = new PrismaClient({ datasources: { db: { url } }, rejectOnNotFound: { findUnique: true } });

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

    return { expressServer, apolloServer, graphQLSchema, prisma };
};

export default getExpressServer;
