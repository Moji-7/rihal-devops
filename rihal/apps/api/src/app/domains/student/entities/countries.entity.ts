import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany, JoinColumn } from 'typeorm';
import { Student } from "./student.entity"
@Entity('countries')
export class Countries{
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({ name: "name" ,length: 255})
  name: string;

  @OneToMany(() => Student, (student) => student.countries)
  @JoinColumn({ name: "studentid" })
  students: Student[]


  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;
}

