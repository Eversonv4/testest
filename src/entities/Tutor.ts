import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pet } from "./Pet";
@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: "date_of_birth", type: "datetime" })
  dateOfBirth: Date;

  @Column()
  phone: string;

  @Column()
  zipCode: string;

  @OneToMany(() => Pet, (pet) => pet.tutor)
  pets: Pet[];
}
