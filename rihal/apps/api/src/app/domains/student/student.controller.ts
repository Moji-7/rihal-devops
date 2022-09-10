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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { StudentSearchDTO } from '../../validations/StudentSearchDTO';

import { Student } from './entities/student.entity';

//import { Message } from '@rihal/api-interfaces';

import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/search')
  //@UsePipes(new ValidationPipe({ transform: true }))
  async getStudents(@Body() studentSearchDTO: StudentSearchDTO):Promise<Student[]> {
    if (Object.keys(studentSearchDTO).length) {
      const filteredStudents = await this.studentService.getFilteredStudent(
        studentSearchDTO
      );
      return filteredStudents;
    } else {
      const allStudents = await this.studentService.findAll();
      return allStudents;
    }
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    const student = await this.studentService.findOne(id);
    if (!student) throw new NotFoundException('Product does not exist!');
    return student;
  }

  @Patch('/:id')
  async update(
    @Body() studentDto: StudentSearchDTO,
    @Param('id') id: string
  ): Promise<number> {
    const studentUpdated = await this.studentService.update(id, studentDto);
    if (studentUpdated.affected === 0)
      throw new NotFoundException('student not found');
    // const {name} = studentUpdated
    return 204;
  }

  @Post()
  add(@Body() student: Student) {
    return this.studentService.create(student);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.studentService.remove(id);
  }
}
