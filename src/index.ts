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
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { getUser } from './utils/auth';

// init client prisma
const prisma = new PrismaClient({ rejectOnNotFound: { findUnique: true } });

const { PORT } = process.env;

const main = async () => {
    if (!process.env.FRONT_URL || !process.env.MOBILE_URL) {
        throw new Error(
            'The environment variable FRONT_URL and MOBILE_URL must be specified'
        );
    }

    const corsConfig =
        process.env.NODE_ENV !== 'production'
            ? {
                  origin: [process.env.FRONT_URL, process.env.MOBILE_URL],
                  credentials: true,
              }
            : {
                  origin: 'https://mon-site.com',
                  credentials: true,
              };

    // Create server with express
    const app = Express();
    app.use(cors(corsConfig));
    app.use(cookieParser());

    const httpServer = createServer(app);

    // init the resolvers and the services in the schema
    const schema = buildSchemaSync({
        resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
        container: Container,
    });

    // Init apollo server
    const server = new ApolloServer({
        schema,
        context: ({ req, res }) => {
            const userLogged = getUser(req.cookies.token);
            return {
                req,
                res,
                userLogged,
                prisma,
            };
        },
        csrfPrevention: true,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    server.applyMiddleware({ app, cors: false, path: '/' });

    // run a web server
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
    );

    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
};

main();
