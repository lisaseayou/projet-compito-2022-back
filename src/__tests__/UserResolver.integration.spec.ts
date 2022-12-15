import getExpressServer from '../config/express-server';
import { corsConfig } from '..';
import { ExpressContext, ApolloServer } from 'apollo-server-express';
import Role from '../enums/Role.enum';
import { GET_ALL_USERS, REGISTER } from '../queries/queries';

const testUserLength = async (server: ApolloServer<ExpressContext>, query: string, value: number) => {
    const result = await server.executeOperation({
        query
    })

    expect(result.errors).toBeUndefined();
    expect(result?.data?.allUsers.length).toStrictEqual(value);
}

describe('server', () => {
    let server: ApolloServer<ExpressContext>;

    beforeAll(async () => {
        const { apolloServer } = await getExpressServer(
            `${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig,
        );
        server = apolloServer;
    });

    afterAll(async () => {
        const { prisma } = await getExpressServer(
            `${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig,
        );
        const deleteUser = prisma.user.deleteMany();
        const deleteComment = prisma.comment.deleteMany();
        const deleteDocument = prisma.document.deleteMany();
        const deleteNotification = prisma.notification.deleteMany();
        const deleteProject = prisma.project.deleteMany();
        const deleteTask = prisma.task.deleteMany();

        await prisma.$transaction([
            deleteUser,
            deleteComment,
            deleteDocument,
            deleteNotification,
            deleteProject,
            deleteTask,
        ]);

        await prisma.$disconnect();
    });

    describe('Query users', () => {
        describe('Query user', () => {
            it('when there are no user in database', async () => {
                testUserLength(server, GET_ALL_USERS, 0)
            })
        });

        describe('mutation user', () => {
            it('register and return user', async () => {
                const result = await server.executeOperation({
                    query: REGISTER,
                    variables: {
                        data: {
                            name: 'john',
                            email: 'john@test.fr',
                            roles: Role.ADMIN,
                            password: '1234567890',
                            passwordConfirm: '1234567890',
                        },
                    },
                })

                expect(result.errors).toBeUndefined();
                expect(result?.data?.register).toMatchInlineSnapshot(`
                    {
                      "description": "",
                      "email": "john@test.fr",
                      "github": "",
                      "linkedin": "",
                      "name": "john",
                      "roles": [
                        "ADMIN",
                      ],
                      "twitter": "",
                      "url": "",
                    }
                `);
                expect(result?.data?.register).toHaveProperty("email", "john@test.fr");
                expect(result?.data?.register).not.toHaveProperty("email", "john@test.com");
            });

            it('when there are one user in database', async () => {
                testUserLength(server, GET_ALL_USERS, 1)

            })
        });
    });
});
