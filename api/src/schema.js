const { gql } = require("apollo-server");

// Basic GraphQl schema - we'll build this up step by step
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
