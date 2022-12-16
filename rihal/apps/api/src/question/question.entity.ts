import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 4000 })
  description: string;

  @Column()
  groupId: number;

  @CreateDateColumn()
  askDate: Date;

  @Column()
  studentId: number;

  @Column()
  teacherId: number;

  @Column({nullable:true})
  responseDate: Date;

  @Column({ default: 0 })
  likes: number;

  // @OneToMany(() => Student, (student) => student.classes)
  // students: Student[]
}
