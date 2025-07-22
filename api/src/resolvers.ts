import { Pet, PetType, NewPetInput, UpdatePetInput } from "./types";
import { petService } from "./database";

const resolvers = {
  Query: {
    hello: (): string => "Hello from GraphQL",
    pets: (): Pet[] => petService.getAllPets(),
    pet: (_: any, { id }: { id: string }): Pet | undefined =>
      petService.getPetById(id),
  },
  Mutation: {
    addPet: async (_: any, { input }: { input: NewPetInput }): Promise<Pet> => {
      return await petService.addPet(input.name, input.type);
    },
    updatePet: async (_: any, { id, input }: { id: string; input: UpdatePetInput }): Promise<Pet | null> => {
      return await petService.updatePet(id, input);
    },
    deletePet: async (_: any, { id }: { id: string }): Promise<boolean> => {
      return await petService.deletePet(id);
    },
  },
};

export default resolvers;
