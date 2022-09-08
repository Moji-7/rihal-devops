import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,ManyToOne, JoinColumn} from 'typeorm';
import { Classes } from "./classes.entity"
import { Countries } from "./countries.entity"
@Entity('student')
export class Student{
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({ length: 255})
  name: string;

  @Column({ type: 'date' ,name: "date_of_birth" })
  dateOfBirth: Date;

  //@Column({ type: 'date' ,name: "date_of_birth" })
  @ManyToOne(() => Classes, (classes) => classes.className,{ onDelete: 'CASCADE'})
  classes: Classes
  @JoinColumn({ name: "classesid" })
  Classes: Classes;

  @ManyToOne(() => Countries, (countries) => countries.students)
  countries: Countries
  @JoinColumn({ name: "countriesid" })
  Countries: Countries;


  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;

}
