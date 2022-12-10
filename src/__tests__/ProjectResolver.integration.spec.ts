import getExpressServer from "../config/express-server";
import { corsConfig } from "../";
import { ExpressContext, ApolloServer } from "apollo-server-express";

describe('server', () => {
    let server: ApolloServer<ExpressContext>

    beforeAll(async () => {
        const { apolloServer } = await getExpressServer(
            `${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig
        );

        server = apolloServer;
    });

    describe('Query projects', () => {
        const GET_ALL_PROJECTS = `
            query AllProjects {
                allProjects {
                    createdAt
                    description
                    id
                    name
                }
            }
        `;

        describe('when there are no projects in database', () => {
            it('returns empty array', async () => {
                const result = await server.executeOperation({
                    query: GET_ALL_PROJECTS,
                });

                expect(result.errors).toBeUndefined();
                expect(result.data?.allProjects).toStrictEqual([]);
            });
        });
    })
})