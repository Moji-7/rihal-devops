import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classes } from './classes.entity';
import { Countries } from './countries.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>
  ) {
    // const classes = new Classes();
    // classes.class_name = 'science';
    // let classesid=studentsRepository.save(classes);
    // const country = new Countries();
    // country.name = 'finland';
    // let countryid= studentsRepository.save(country);

  }
  /*  getData(): Message {
    return { message: 'Welcome to api!' };
  }*/
  getStudents(): Promise<Student[]> {
    const student = new Student();
    student.name = 'ali';
    student.date_of_birth = new Date(1995, 11, 17);
    student.countries.id=1
   // student.classes.id = classesid;
    this.studentsRepository.save(student)
    return this.studentsRepository.find();
  }

  addStudent(student): Promise<Student> {
    this.studentsRepository.insert(student);
    return student;
  }
}
