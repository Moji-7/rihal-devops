// import { Controller, Get } from '@nestjs/common';
// import { InMemoryDBService, InMemoryDBEntityAsyncController } from '@nestjs-addons/in-memory-db';


// import { faker } from '@faker-js/faker';
// import { Student } from '../app/domains/student/entities/student.entity';
// import { studentClassesDto } from '@rihal/data-models';

// export interface StudentEntity extends studentClassesDto {
//    id: string
// }
// @Controller('student')
// export class StudentController extends InMemoryDBEntityAsyncController<StudentEntity> {
//   constructor(private studentService: InMemoryDBService<StudentEntity>) {
//       super(studentService);
//   }
//   @Get('seed')
//   GetEmployee() {
//       const recordFactory = (idx: number): Partial<StudentEntity> => ({
//           id: idx.toString(), name:  faker.name.firstName() + faker.name.lastName(), age: 10,
//           className: `class_${idx}`, countryName: `country_${idx}`
//       });

//       this.studentService.seed(recordFactory, 10);
//       return this.studentService.getAll();
//   }
//   // const fakerUser = (): any => ({
//   //   name: faker.name.firstName() + faker.name.lastName(),
//   //   email: faker.internet.email(),
//   //   password: faker.internet.password(),
//   //   });
// }
