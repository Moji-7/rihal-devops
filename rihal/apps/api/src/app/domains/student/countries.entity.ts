import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import { Student } from "./student.entity"
@Entity('Countries')
export class Countries{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student) => student.countries)
  students: Student[]

  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;
}
