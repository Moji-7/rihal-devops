import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { Student } from "./student.entity"
@Entity('classes')
export class Classes{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Column({ name: "class_name" ,length: 255})
  name: string;

  @OneToMany(() => Student, (student) => student.classes,{cascade: true})
  students: Student[]

  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;
}
