/* eslint-disable no-promise-executor-return */
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import * as Express from 'express';
import { createServer } from 'http';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import Container from 'typedi';

const prisma = new PrismaClient();

const { PORT } = process.env;

const main = async () => {
    // Create server with express
    const app = Express();
    const httpServer = createServer(app);

    const schema = buildSchemaSync({
        resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
        container: Container,
    });

    // Init apollo server
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: () => ({ prisma }),
    });

    await server.start();
    server.applyMiddleware({ app, path: '/' });

    // run a web server
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
    );

    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
};

main();
