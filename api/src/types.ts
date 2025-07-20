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

// Resolver Types
export interface Context {
  // Add context properties as needed
}

export interface QueryResolvers {
  hello: () => string;
  pets: () => Pet[];
  pet: (parent: any, args: { id: string }) => Pet | undefined;
}

export interface Resolvers {
  Query: QueryResolvers;
}
