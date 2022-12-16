import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRespository: Repository<Question>
  ) {}

  async getQuestion(): Promise<Question[]> {
    //TODO : filter by student id
    //TODO: filter by Search DTO
    try {
      return await this.questionRespository.find();
    } catch (error) {
      return null;
    }
  }

  async add(question: Question) {
    return await this.questionRespository.save(question);
  }
}
  //  if (!user) {
  //     throw new NotFoundException(`User with ID "${id}" not found`);
  //   }
