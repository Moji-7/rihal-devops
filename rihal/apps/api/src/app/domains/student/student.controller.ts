import { Body, Controller, Get, Post } from '@nestjs/common';
import { countriesService } from './country.service';
import { Student } from './student.entity';

//import { Message } from '@rihal/api-interfaces';

import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly countriesService: countriesService
  ) {}

  /* @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }*/
  @Get()
  getStudents() {

    return this.studentService.getStudents();

  }
  @Get('countries')
  getCountries() {
    return this.countriesService.getCountries();
  }
  @Post()
  addStudent(@Body() student: Student) {
    return this.studentService.addStudent(student);
  }
}
