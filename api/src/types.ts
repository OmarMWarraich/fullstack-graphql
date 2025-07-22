// GraphQL Types
export interface Pet {
  id: string;
  name: string;
  type: PetType;
}

export enum PetType {
  CAT = "CAT",
  DOG = "DOG",
}

// Input Types
export interface NewPetInput {
  name: string;
  type: PetType;
}

export interface UpdatePetInput {
  name?: string;
  type?: PetType;
}

// Resolver Types
export interface Context {
  // Add context properties as needed
}

export interface QueryResolvers {
  hello: () => string;
  pets: () => Pet[];
  pet: (parent: any, args: { id: string }) => Pet | undefined;
}

export interface MutationResolvers {
  addPet: (parent: any, args: { input: NewPetInput }) => Promise<Pet>;
  updatePet: (parent: any, args: { id: string; input: UpdatePetInput }) => Promise<Pet | null>;
  deletePet: (parent: any, args: { id: string }) => Promise<boolean>;
}

export interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}
