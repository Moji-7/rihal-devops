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

import { Student } from './student.entity';

//import { Message } from '@rihal/api-interfaces';

import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService
  ) {}

  /* @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }*/

  @Get('/')
  async getStudents(@Query() filterProductDTO: FilterProductDTO) {
    if (Object.keys(filterProductDTO).length) {
      const filteredStudents = await this.studentService.getFilteredStudent(filterProductDTO);
      return filteredStudents;
    } else {
      const allStudents = await this.studentService.findAll();
      return allStudents;
    }
  }

  @Get('/:id')
  async getStudent(@Param('id') id: string) {
    const student = await this.studentService.findOne(id);
    if (!student) throw new NotFoundException('Product does not exist!');
    return student;
  }

  @Post()
  addStudent(@Body() student: Student) {
    return this.studentService.addStudent(student);
  }

  @Patch(':id')
  async update(@Body() note: Student, @Param('id') id: number): Promise<Student> {
    const noteEdited = await this.studentService.update(id, note);
    return noteEdited;
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.studentService.remove(id);
  }
}
