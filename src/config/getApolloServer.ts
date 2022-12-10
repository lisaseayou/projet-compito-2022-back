import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { buildSchemaSync } from 'type-graphql';
import Container from 'typedi';
import { getUser } from '../utils/auth';

const getApolloServer = async (
    resolversPath: string,
    prisma: any,
    httpServer: any
) => {
    // init the resolvers and the services in the schema
    const schema = buildSchemaSync({
        resolvers: [resolversPath],
        container: Container,
    });

    // Init apollo server
    const server = new ApolloServer({
        schema,
        context: ({ req, res }) => {
            const userLogged = getUser(req?.cookies?.token);
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

    return { server, schema };
};

export default getApolloServer;
