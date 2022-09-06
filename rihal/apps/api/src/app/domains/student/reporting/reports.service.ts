import { Injectable } from '@nestjs/common';

import {
  InjectDataSource,
  InjectRepository,
} from '@nestjs/typeorm';
import { StudentAverageAge, StudentSummeryInfo } from '@rihal/data-models';

import { DataSource, Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Student)
    private reportsService: Repository<Student>,
    @InjectDataSource() private readonly datasource: DataSource
  ) {}

  async findAll(
    joinTable: string,
    studentId: number
  ): Promise<StudentSummeryInfo[]> {
   // const s = `${joinTable}`;
    const joinTableCol = joinTable === 'classes' ? 'classes.class_name' : 'countries.name';
    const res = await this.datasource
      .getRepository(Student)
      .createQueryBuilder('student')
      .select(joinTableCol,"name")
      //.addSelect('student.name')
      .innerJoin('student.'+joinTable, joinTable)
      .addSelect('count(student.id)', 'count')
      .groupBy(joinTableCol)
      //.addGroupBy('student.name')
      //.where('student.name = :name', { name: groupbyCol })
      .getRawMany();
    return res;
  }

  async averageStudentsAge(): Promise<StudentAverageAge[]> {
    const res = await this.datasource
      .getRepository(Student)
      .createQueryBuilder('student')
      .select("EXTRACT(YEAR FROM student.date_of_birth)", 'year')
      .getRawMany();
    return res;
  }
}
