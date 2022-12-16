import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, Condition } from 'typeorm';
import { WhereClauseCondition } from 'typeorm/query-builder/WhereClause';

import { User } from './user.entity';
import { UserLikes } from './userLikes.entity';
import { IUserLikes } from './userLikes.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserLikes)
    private readonly likesRepository: Repository<UserLikes>
  ) {}

  async findOne(userName: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        username: userName,
      },
    });
  }

  async createUser(user: any): Promise<InsertResult> {
    try {
      /**
       * Perform all needed checks
       */

      const userEntity = this.userRepository.create(user);

      const res = await this.userRepository.insert(userEntity);

      Logger.log('createUser - Created user');

      return res;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }

  async likes(userId: number): Promise<IUserLikes[]> {
    try {
      let _likes: IUserLikes[]; //['Be Happy :)', 'Be Optemistic >)'];
      _likes = await this.likesRepository.find({
        where: {
          userId: userId,
        },
      });
      return _likes;
    } catch (error) {
      return error;
    }
  }
}
