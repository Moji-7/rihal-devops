import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { ProductEntity } from './product.entity';

import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Get(':id')
  // getData(@Param('id') id: number) {
  //   return this.appService.getData(id);
  // }

  @Post('')
  async create(@Body() product: ProductEntity) {
    return await this.productService.create(product);
  }
  @Get('products')
  async getProducts(): Promise<ProductEntity[]> {
    return await this.productService.getProducts();
  }
}
