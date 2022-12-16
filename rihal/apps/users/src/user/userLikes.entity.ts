import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  Unique,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { IUserLikes } from './userLikes.interface';
import { User } from './user.entity';

@Entity()
export class UserLikes implements IUserLikes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  qoute: string;

  // @OneToMany(() => User, (user) => user.id)
  // @JoinColumn({ name: "userId", referencedColumnName: "id" })
  // users: User[]

  @CreateDateColumn()
  createdAt: Date;
}
