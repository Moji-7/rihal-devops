import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { StudentSummeryInfo } from '@rihal/data-models';
import { Student } from '../student/entities/student.entity';


@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Student)
    private reportsService: Repository<Student>,
    @InjectDataSource() private readonly datasource: DataSource
  ) {}

  async fetchCountBy(
    relatedEntity: string,
    studentId: number
  ): Promise<StudentSummeryInfo[]> {
    const relatedColumn =
    relatedEntity === 'classes' ? 'classes.class_name' : 'countries.name';
    const res = await this.datasource
      .getRepository(Student)
      .createQueryBuilder('student')
      .select(relatedColumn, 'name')
      //.addSelect('student.name')
      .innerJoin('student.' + relatedEntity, relatedEntity)
      .addSelect('count(student.id)', 'value')
      .groupBy(relatedColumn)
      //.addGroupBy('student.name')
      //.where('student.name = :name', { name: groupbyCol })
      .getRawMany();
    return res;
  }

  async averageStudentsAge(): Promise<StudentSummeryInfo[]> {
    const res = await this.datasource
      .getRepository(Student)
      .createQueryBuilder('student')
      .select('EXTRACT(YEAR FROM student.date_of_birth)', 'name')
      .addSelect('count(*)', 'value')
       .groupBy('EXTRACT(YEAR FROM student.date_of_birth)')
      .getRawMany();
    return res;
  }
}
