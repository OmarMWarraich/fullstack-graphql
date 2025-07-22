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

  input NewPetInput {
    name: String!
    type: PetType!
  }

  input UpdatePetInput {
    name: String
    type: PetType
  }

  type Query {
    hello: String
    pets: [Pet]!
    pet(id: ID!): Pet
  }

  type Mutation {
    addPet(input: NewPetInput!): Pet!
    updatePet(id: ID!, input: UpdatePetInput!): Pet
    deletePet(id: ID!): Boolean!
  }
`;

export default typeDefs;
