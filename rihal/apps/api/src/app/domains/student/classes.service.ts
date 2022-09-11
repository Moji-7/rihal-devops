import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Classes } from './entities/classes.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Classes)
    private classesRepository: Repository<Classes>
  ) {}

  async getFiltered(ceriteria: string): Promise<Classes[]> {
    let queryResult = await this.findAll();
    if (ceriteria)
    queryResult = queryResult.filter(entity => entity.name === ceriteria)
    return queryResult;
  }
  findAll(): Promise<Classes[]> {
    return this.classesRepository.find();
  }

  findOne(id: number): Promise<Classes> {
    return this.classesRepository.findOneBy({id:id});
  }

  create(country: Classes): Promise<Classes> {
    return this.classesRepository.save(country);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.classesRepository.delete(id);
  }
  update(id: number,classes:Classes): Promise<DeleteResult> {
    return this.classesRepository.update(id,classes);
  }
}
