import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { StudentSearchDTO } from '../../validations/StudentSearchDTO';

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


  async getFilteredStudent(
    studentSearchDto: StudentSearchDTO
  ): Promise<Student[]> {
    const {
      name,
      classesId,
      countriesId,
    //   dateOfBirthFrom,
    //  dateOfBirthTo,
    //  registerDateFrom,
    //  registerDateTo,
    } = studentSearchDto;
    let students = await this.findAll();

    if (name)
      students = students.filter((student) => student.name.includes(name));
    if (countriesId)
      students = students.filter(
        (student) => student.countries.id === countriesId
      );
    if (classesId)
      students = students.filter(
        (student) => student.classes.id === classesId
      );

    return students;
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOneBy({ id: id });
  }

  create(Student: Student): Promise<Student> {
    return this.studentsRepository.save(Student);
   // return this.studentsRepository.find();
  }

  // async update(
  //   id: string,
  //   studentDto: StudentSearchDTO
  // ): Promise<Partial<UpdateResult>> {
  //   const updated = await this.studentsRepository.update(id, studentDto);
  //   // const {name} = updated
  //   return updated;
  // }



  remove(id: string): Promise<DeleteResult> {
    return this.studentsRepository.delete(id);
  }
}
