import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { AppService } from './app.service';

import { resultDto, searchDto } from './models/result.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':id')
  // getData(@Param('id') id: number) {
  //   return this.appService.getData(id);
  // }
  @Post('create')
  async create(@Body() searchDto: searchDto, @Query('sort') sort: string) {
    const result: resultDto = { name: 'Neda' };
    return result;
  }

  // @Get("products")
  // async getProducts():Promise<ProductEntity[]>{
  //   return await this.productService.getProducts();
  // }

}
