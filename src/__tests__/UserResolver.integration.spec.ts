import getExpressServer from '../config/express-server';
import { corsConfig } from '..';
import { ExpressContext, ApolloServer } from 'apollo-server-express';
import Role from '../enums/Role.enum';


describe('server', () => {
    let server: ApolloServer<ExpressContext>;

    beforeAll(async () => {
        const { apolloServer } = await getExpressServer(
            `${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig,
            `${process.env.DATABASE_URL}`
        );
        server = apolloServer;
    });

    afterAll(async () => {
        const { prisma } = await getExpressServer(
            `${__dirname}/**/*.resolver.{ts,js}`,
            corsConfig,
            `${process.env.DATABASE_URL}`
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

        const REGISTER = `
            mutation register($data: AddUserInput!) {
                register(data: $data) {
                    name
                    email
                    roles
                    url
                    description
                    twitter
                    github
                    linkedin
                }
            }
        `;

        describe('mutation user', () => {
            it('register user', async () => {
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
        });
    });
});
