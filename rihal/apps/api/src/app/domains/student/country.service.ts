import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classes } from './classes.entity';
import { Countries } from './countries.entity';

@Injectable()
export class countriesService {
  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>
  ) {

  }
  /*  getData(): Message {
    return { message: 'Welcome to api!' };
  }*/
  getCountries(): Promise<Countries[]> {
    return this.countriesRepository.find();
  }


}
