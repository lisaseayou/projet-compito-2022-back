/* eslint-disable no-promise-executor-return */
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, gql } from 'apollo-server-core';
import * as Express from 'express';
import { createServer } from 'http';
import 'dotenv/config';

const { PORT } = process.env;

// Set schema
const schema = gql(`
    type Query {
        name: String
    }
`);

const resolvers = {
  Query: {
    name: () => 'John Doe',
  },
};

const main = async () => {
  // Create server with express
  const app = Express();
  const httpServer = createServer(app);

  // Init apollo server
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: {},
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
