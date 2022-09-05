import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Countries } from './countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>
  ) {}
  /*  getData(): Message {
    return { message: 'Welcome to api!' };
  }*/


  findAll(): Promise<Countries[]> {
    return this.countriesRepository.find();
  }

  findOne(id: number): Promise<Countries> {
    return this.countriesRepository.findOneBy({id:id});
  }

  create(country: Countries): Promise<Countries> {
    return this.countriesRepository.save(country);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.countriesRepository.delete(id);
  }
}
