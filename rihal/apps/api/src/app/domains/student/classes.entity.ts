import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { Student } from "./student.entity"
@Entity('classes')
export class Classes{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_name: string;

  @OneToMany(() => Student, (student) => student.classes)
  student: Student[]
  
  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;
  
  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;
}