import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Course } from "./course";

@Entity()
export class Slides {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @OneToOne(() => Course)
  @JoinColumn()
  course: Course;
}
