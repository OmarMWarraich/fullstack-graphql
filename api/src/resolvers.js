const pets = [
  { id: "1", name: "Buddy", type: "DOG" },
  { id: "2", name: "Whiskers", type: "CAT" },
  { id: "3", name: "Max", type: "DOG" },
];

const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL",
    pets: () => pets,
    pet: (_, { id }) => pets.find((pet) => pet.id === id),
  },
};

module.exports = resolvers;
