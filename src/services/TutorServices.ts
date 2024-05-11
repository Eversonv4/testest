import { AppDataSource } from "../ormconfig";
import { Tutor } from "../entities/Tutor";

class TutorService {
  private tutorRepository = AppDataSource.getRepository(Tutor);

  async getTutors(): Promise<Tutor[]> {
    return await this.tutorRepository.find({ relations: ["pets"] });
  }

  async createTutor(
    name: string,
    email: string,
    phone: string,
    dateOfBirth: Date,
    zipCode: string
  ): Promise<Tutor> {
    const tutor = new Tutor();
    tutor.name = name;
    tutor.email = email;
    tutor.phone = phone;
    tutor.dateOfBirth = dateOfBirth;
    tutor.zipCode = zipCode;
    return await this.tutorRepository.save(tutor);
  }

  async updateTutor(
    id: number,
    name: string,
    email: string,
    phone: string,
    dateOfBirth: Date,
    zipCode: string
  ): Promise<void> {
    await this.tutorRepository.update(id, {
      name,
      email,
      phone,
      dateOfBirth,
      zipCode,
    });
  }

  async deleteTutor(id: number): Promise<void> {
    await this.tutorRepository.delete(id);
  }
}

const tutorService = new TutorService();

export {tutorService};