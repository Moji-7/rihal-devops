import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './entities/student.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeleteResult, ILike, Repository, UpdateResult } from 'typeorm';

import { StudentSearchDTO } from '../../validations/StudentSearchDTO';
import { Classes } from './entities/classes.entity';
import { StudentClass } from './entities/studentClass.viewentity';
import { SearchStudentClassesDto } from './entities/dto/searchStudentClasses';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    @InjectDataSource() private readonly datasource: DataSource
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
    sort: string,
    order: string,
    page: number,
    query: string

  ): Promise<SearchStudentClassesDto> {
    const take=10

     const [data, total]= await (await this.datasource.manager.findAndCount(StudentClass,{
      where: [{
        name: ILike(`%${query}%`),
        //email: ILike(`%${search}%`)
    }],
      order: {
        [sort]: order
    },
    take,
    skip: (page - 1) * take
     }))
     return {
      studentClasses: data,
      count: total
  }

  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    // return this.studentsRepository.findOneBy({ id: id });
    const student = await this.studentsRepository.findOneBy({ id: id });
    // const categories = await student.classes
    return student;
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
