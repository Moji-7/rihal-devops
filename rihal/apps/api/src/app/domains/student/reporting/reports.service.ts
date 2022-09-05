import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Classes } from './classes.entity';


@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Classes)
    private classesRepository: Repository<Classes>
  ) {}
  /*  getData(): Message {
    return { message: 'Welcome to api!' };
  }*/


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
}
