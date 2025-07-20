const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Create Apollo Server with minimal setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀Server ready at ${url}`);
  console.log("Try visiting the GraphQL playground!");
});
