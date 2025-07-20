const { gql } = require("apollo-server");

// Basic GraphQl schema - we'll build this up step by step
const typeDefs = gql`
  enum PetType {
    CAT
    DOG
  }

  type Pet {
    id: ID!
    name: String!
    type: PetType!
  }

  type Query {
    hello: String
    pets: [Pet]!
    pet(id: ID!): Pet
  }
`;

module.exports = typeDefs;
