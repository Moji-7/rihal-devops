import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { Student } from "./student.entity"
@Entity('classes')
export class Classes{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Column({ name: "class_name" ,length: 255})
  className: string;

  @OneToMany(() => Student, (student) => student.classes)
  student: Student[]

  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;
}
