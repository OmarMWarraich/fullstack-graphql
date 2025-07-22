/* @ts-ignore */
import { JSONFilePreset } from "lowdb/node";
/* @ts-ignore */
import { nanoid } from "nanoid";
import { Pet, PetType } from "./types";

// Database schema
export interface Database {
  pets: Pet[];
}

// Default data
const defaultData: Database = {
  pets: [
    { id: "1", name: "Buddy", type: PetType.DOG },
    { id: "2", name: "Whiskers", type: PetType.CAT },
    { id: "3", name: "Max", type: PetType.DOG },
  ],
};

// Create database instance
export const db = await JSONFilePreset<Database>("db.json", defaultData);

// Database helper functions
export const petService = {
  // Get all pets
  getAllPets: (): Pet[] => {
    return db.data.pets;
  },

  // Get pet by ID
  getPetById: (id: string): Pet | undefined => {
    return db.data.pets.find((pet: Pet) => pet.id === id);
  },

  // Add a new pet
  addPet: async (name: string, type: PetType): Promise<Pet> => {
    const newPet: Pet = {
      id: nanoid(),
      name,
      type,
    };

    await db.update(({ pets }: Database) => pets.push(newPet));
    return newPet;
  },

  // Update a pet
  updatePet: async (
    id: string,
    updates: Partial<Omit<Pet, "id">>
  ): Promise<Pet | null> => {
    const pet = db.data.pets.find((p: Pet) => p.id === id);
    if (!pet) return null;

    Object.assign(pet, updates);
    await db.write();
    return pet;
  },

  // Delete a pet
  deletePet: async (id: string): Promise<boolean> => {
    const index = db.data.pets.findIndex((p: Pet) => p.id === id);
    if (index === -1) return false;

    await db.update(({ pets }: Database) => pets.splice(index, 1));
    return true;
  },
};
