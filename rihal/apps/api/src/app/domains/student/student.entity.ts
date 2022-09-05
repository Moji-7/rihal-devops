import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,ManyToOne} from 'typeorm';
import { Classes } from "./classes.entity"
import { Countries } from "./countries.entity"
@Entity('student')
export class Student{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255})
  name: string;

  @Column({ type: 'date' ,name: "date_of_birth" })
  dateOfBirth: Date;

  @ManyToOne(() => Classes, (classes) => classes.class_name)
  classes: Classes

  @ManyToOne(() => Countries, (countries) => countries.students)
  countries: Countries

  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;

}
