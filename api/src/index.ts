//@ts-ignore
import { ApolloServer } from "@apollo/server";
//@ts-ignore
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

// Create Apollo Server with minimal setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀Server ready at ${url}`);
console.log("Try visiting the GraphQL playground!");
