import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Countries } from './entities/countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>
  ) {}


  async getFiltered(ceriteria: string): Promise<Countries[]> {
    let queryResult = await this.findAll();
    if (ceriteria)
    queryResult = queryResult.filter(entity => entity.name === ceriteria)
    return queryResult;
  }
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
  update(id: number,countries:Countries): Promise<DeleteResult> {
    return this.countriesRepository.update(id,countries);
  }
}
