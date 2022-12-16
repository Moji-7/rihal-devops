import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { Student } from "./student.entity"
@Entity('classes')
export class Classes{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Column({ name: "class_name" ,length: 255})
  name: string;

  @OneToMany(() => Student, (student) => student.classes)
  students: Student[]

  @CreateDateColumn()
  CreatedDate : Date;

  @UpdateDateColumn()
  ModifiedDate : Date;
}
