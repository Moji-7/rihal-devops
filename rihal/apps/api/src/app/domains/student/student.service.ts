import { Injectable } from '@nestjs/common';
//import { Message } from '@rihal/api-interfaces';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { studentClassesDto } from '@rihal/data-models';
import { FilterStudentDTO } from 'libs/data-models/src/lib/filterStudent.dto';

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
    student.dateOfBirth = new Date(1995, 11, 17);
    student.countries.id = 1;
    // student.classes.id = classesid;
    this.studentsRepository.save(student);
    return this.studentsRepository.find();
  }

  async getFilteredStudent(
    filterStudentDTO: FilterStudentDTO
  ): Promise<Student[]> {
    const { name, className, country } = filterStudentDTO;
    let students = await this.findAll();
    if (name)
      students = students.filter((student) => student.name.includes(name));

    if (country)
      students = students.filter(
        (student) => student.countries.countryName === country
      );

    if (className)
      students = students.filter(
        (student) => student.classes.className === className
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
  }

  async update(
    id: string,
    studentDto: studentClassesDto
  ): Promise<Partial<UpdateResult>> {
    const updated = await this.studentsRepository.update(id, studentDto);
    // const {name} = updated

    return updated;
  }

  remove(id: string): Promise<DeleteResult> {
    return this.studentsRepository.delete(id);
  }
}
