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


  @Column({ name: "classesId" })
  @ManyToOne(() => Classes, (classes) => classes.students,{ onDelete: 'CASCADE'
  //,eager:true
  })
  @JoinColumn({ name: "classesId", referencedColumnName: "id" })
  classes: Classes;

  @Column({ name: "countriesId" })
  @ManyToOne(() => Countries, (countries) => countries.students)
  @JoinColumn({ name: "countriesId", referencedColumnName: "id" })
  countries: Countries;


  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;

}
