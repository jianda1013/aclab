import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column("integer")
  year: number;
}
