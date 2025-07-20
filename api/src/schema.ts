// Basic GraphQL schema - we'll build this up step by step
const typeDefs = `
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

export default typeDefs;
