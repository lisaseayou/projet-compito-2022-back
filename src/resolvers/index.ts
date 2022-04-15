const resolvers = {
  Query: {
    getAllUsers: async (_: any, __: any, context: any) =>
      context.prisma.user.findMany(),
  },
  Mutation: {
    addUser: (_: any, args: any, context: any) => {
      const newUser = context.prisma.user.create({
        data: { name: args.name },
      });
      return newUser;
    },
  },
};

export default resolvers;
