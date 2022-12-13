/* eslint-disable no-promise-executor-return */
import 'dotenv/config';
import 'reflect-metadata';
import getExpressServer from './config/express-server';

const { PORT } = process.env;

export const corsConfig =
    process.env.NODE_ENV !== 'production'
        ? {
            origin: [
                process.env.FRONT_URL,
                process.env.MOBILE_URL,
                'https://studio.apollographql.com',
            ],
            credentials: true,
        }
        : {
            origin: 'https://mon-site.com',
            credentials: true,
        };

const main = async () => {
    if (!process.env.DATABASE_URL || !process.env.FRONT_URL || !process.env.MOBILE_URL) {
        throw new Error(
            'The environment variable FRONT_URL and MOBILE_URL must be specified'
        );
    }

    const { expressServer, apolloServer } = await getExpressServer(
        `${__dirname}/**/*.resolver.{ts,js}`,
        corsConfig,
        process.env.DATABASE_URL
    );

    // run a web server
    await new Promise<void>(() =>
        expressServer.listen({ port: PORT }, () => {
            console.log(
                `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
            );
        }))

};

main();
