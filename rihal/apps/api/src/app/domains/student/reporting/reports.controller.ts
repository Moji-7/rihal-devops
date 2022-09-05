import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

import { Student } from './student.entity';

import { ClassesService} from './classes.service';

@Controller('books')
export class LibraryController {
    constructor(private readonly classesService: ClassesService){}

    @Post()
    async createBook(@Res() response, @Body()book: Book) {
        const newBook = await this.classesService.create(book);
        return response.status(HttpStatus.CREATED).json({
            newBook
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const books = await this.classesService.findAll();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const book = await this.classesService.findOne(id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

    @Patch(':id')
    async editNote(@Body() note: Student, @Param('id') id: number): Promise<Student> {
      const noteEdited = await this.classesService.editNote(id, note);
      return noteEdited;
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.classesService.remove(id);
    }

}
