
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

constructor() { }

  getData(id:number): { message: string } {
    return { message: `Welcome to backend-me!, user:${id}`};
  }
  // async getProducts():Promise<ProductEntity[]>{

  //   return await this.productRepository.find();

  // }
}
