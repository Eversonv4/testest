import { AppDataSource } from "../ormconfig";
import { Pet } from "../entities/Pet";
import { Tutor } from "../entities/Tutor";
class PetService {
  private petRepository = AppDataSource.getRepository(Pet);
  private tutorRepository = AppDataSource.getRepository(Tutor);

  async getPets(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async createPet(
    name: string,
    species: string,
    carry: string,
    weight: number,
    dateOfBirth: Date,
    tutorId: number
  ): Promise<Pet> {
    const pet = new Pet();
    pet.name = name;
    pet.species = species;
    pet.carry = carry;
    pet.weight = weight;
    pet.dateOfBirth = dateOfBirth;

    const tutor = await this.tutorRepository.findOne({
      where: { id: tutorId },
    });

    if (!tutor) {
      throw new Error("Tutor not found");
    }
    pet.tutor = tutor;
    return await this.petRepository.save(pet);
  }

  async updatePet(
    id: number,
    name: string,
    species: string,
    carry: string,
    weight: number,
    dateOfBirth: Date
  ): Promise<void> {
    await this.petRepository.update(id, {
      name,
      species,
      carry,
      weight,
      dateOfBirth,
    });
  }

  async deletePet(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}

const petService = new PetService();

export {petService};