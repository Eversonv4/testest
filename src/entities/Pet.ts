import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Tutor } from "./Tutor";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  carry: string;

  @Column()
  weight: number;

  @Column({ name: "date_of_birth", type: "datetime" })
  dateOfBirth: Date;

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor;
}
