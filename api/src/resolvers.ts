import { Pet, PetType, Resolvers } from "./types";

const pets: Pet[] = [
  { id: "1", name: "Buddy", type: PetType.DOG },
  { id: "2", name: "Whiskers", type: PetType.CAT },
  { id: "3", name: "Max", type: PetType.DOG },
];

const resolvers: Resolvers = {
  Query: {
    hello: (): string => "Hello from GraphQL",
    pets: (): Pet[] => pets,
    pet: (_, { id }: { id: string }): Pet | undefined =>
      pets.find((pet) => pet.id === id),
  },
};

export default resolvers;
