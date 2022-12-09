import getExpressServer from "../config/express-server";
// import { GET_ALL_PROJECTS } from "./operations/query";
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import createTestClient from 'supertest';
import { corsConfig } from "../";

describe('server', () => {
    let testClient: createTestClient.SuperTest<createTestClient.Test>;

    beforeAll(async () => {
        const { expressServer } = await getExpressServer(`${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig);
        testClient = createTestClient(expressServer);

        if (!process.env.DATABASE_TEST_URL) {
            throw Error('toto must be set in environment.');
        }
    });

    // let server: ApolloServer

    // beforeAll(async () => {
    //     const prisma = new PrismaClient({ rejectOnNotFound: { findUnique: true } });
    //     const httpServer = createServer(expressServer);
    //     const { server: apolloServer } =
    //         await getExpressServer(`${__dirname}/**/*.resolver.{ts,js}`,
    //             prisma, httpServer);

    //     server = await apolloServer;
    // });


    // describe('Query projects', () => {
    //     describe('when there are no projects in database', () => {
    //         it('returns empty array', async () => {
    //             const result = await server.executeOperation({
    //                 query: GET_ALL_PROJECTS,
    //             });

    //             expect(result.errors).toBeUndefined();
    //             expect(result.data?.allProjects).toStrictEqual([]);
    //         });
    //     });
    // })
})