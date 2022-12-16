import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>
  ) {}

  async create(product: ProductEntity) {
    return await this.productRepository.insert(product);
  }

  async getProducts(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }
}
