import { ApolloServer } from "@apollo/server";
import { user } from "./user";

async function createApolloGraphqlServer() {
  //Create GQLserver

  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {

        hello: String
        }
        type Mutation {
            ${user.mutations}
      }
    `,
    resolvers: {
      Query: { ...user.resolvers.queries },
      Mutation: { ...user.resolvers.mutations },
    },
  });

  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;
