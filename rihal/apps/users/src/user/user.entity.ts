import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { hash } from 'bcrypt';
import { IsEmail, Min } from 'class-validator';
import { UserInterface } from './user.interface';
import { UserLikes } from './userLikes.entity';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Min(8)
  password: string;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
  // @Column({ name: "userlikesId" })
  // @ManyToOne(() => UserLikes, (userlikes) => userlikes.userId)
  // @JoinColumn({ name: "id", referencedColumnName: "userId" })
  // userLikes: UserLikes;
}
