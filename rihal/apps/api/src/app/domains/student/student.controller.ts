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
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { StudentSearchDTO } from '../../validations/StudentSearchDTO';
import { SearchStudentClassesDto } from './entities/dto/searchStudentClasses';

import { Student } from './entities/student.entity';
import { StudentClass } from './entities/studentClass.viewentity';

//import { Message } from '@rihal/api-interfaces';

import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/search')
  //@UsePipes(new ValidationPipe({ transform: true }))
  async getStudents(
    //@Body() studentSearchDTO: StudentSearchDTO,
    @Query('sort') sort: string,
    @Query('order') order: string,
    @Query('page') page: number,
    @Query('query') query: string
  ): Promise<SearchStudentClassesDto> {
    // if (Object.keys(studentSearchDTO).length) {
    const filteredStudents = await this.studentService.getFilteredStudent(
      sort,
      order,
      page,
      query
      // studentSearchDTO
    );
    return filteredStudents;
    // } else {
    //   const allStudents = await this.studentService.findAll();
    //   return allStudents;
    // }
  }

  @Get('/:id')
  async find(@Param('id') id: number): Promise<StudentClass> {
    const student = await this.studentService.findOne(id);
    if (!student) throw new NotFoundException('student does not exist!');
    return student;
  }

  @Post()
  create(@Body() student: Student) {
    return this.studentService.create(student);
  }

  @Put('/:id')
  async update(
    @Body() studentDto: Student,
    @Param('id') id: string
  ): Promise<number> {
    const studentUpdated = await this.studentService.update(id, studentDto);
    if (studentUpdated.affected === 0)
      throw new NotFoundException('student not found');
  //  const { name } = studentUpdated;
    return 204;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.studentService.remove(id);
  }
}

function put(arg0: string) {
  throw new Error('Function not implemented.');
}
