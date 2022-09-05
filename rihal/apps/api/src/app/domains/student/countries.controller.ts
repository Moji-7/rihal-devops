import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { Countries } from './entities/countries.entity';

//import { Message } from '@rihal/api-interfaces';

import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}


  @Get('/')
  async get(@Query() filterDTO: string) {
    if (Object.keys(filterDTO).length)
      return await this.countriesService.getFiltered(filterDTO);
    else return await this.countriesService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    const countries = await this.countriesService.findOne(id);
    if (!countries) throw new NotFoundException('Product does not exist!');
    return countries;
  }

  @Post()
  add(@Body() countries: Countries) {
    return this.countriesService.create(countries);
  }

  @Patch(':id')
  async update(@Body() dto: Countries, @Param('id') id: number): Promise<number> {
    const updatedResult = await this.countriesService.update(id, dto);
    if (updatedResult.affected === 0)
      throw new NotFoundException('countries not found');
    // const {name} = updatedResult
    return 204;
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.countriesService.remove(id);
  }
}
