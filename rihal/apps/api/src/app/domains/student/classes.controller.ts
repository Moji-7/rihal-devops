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

import { Classes } from './entities/classes.entity';

//import { Message } from '@rihal/api-interfaces';

import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}


  @Get('/')
  async get(@Query() filterDTO: string) {
    if (Object.keys(filterDTO).length)
      return await this.classesService.getFiltered(filterDTO);
    else return await this.classesService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    const classes = await this.classesService.findOne(id);
    if (!classes) throw new NotFoundException('Product does not exist!');
    return classes;
  }

  @Post()
  add(@Body() classes: Classes) {
    return this.classesService.create(classes);
  }

  @Patch(':id')
  async update(@Body() dto: Classes, @Param('id') id: number): Promise<number> {
    const updatedResult = await this.classesService.update(id, dto);
    if (updatedResult.affected === 0)
      throw new NotFoundException('classes not found');
    // const {name} = updatedResult
    return 204;
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.classesService.remove(id);
  }
}
