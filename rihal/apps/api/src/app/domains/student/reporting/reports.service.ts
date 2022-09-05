import { Injectable } from '@nestjs/common';

import {
  InjectConnection,
  InjectDataSource,
  InjectRepository,
} from '@nestjs/typeorm';
import { StudentSummeryInfo } from '@rihal/data-models';
import { Connection, DataSource, getConnection, Repository } from 'typeorm';
import { Classes } from '../entities/classes.entity';
import { Student } from '../entities/student.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Student)
    private reportsService: Repository<Student>,
    @InjectDataSource() private readonly datasource: DataSource
  ) {}

  async findAll(): Promise<StudentSummeryInfo[]> {
    //    return await this.datasource
    //     .createQueryBuilder()
    //     .select("SELECT * FROM student;")
    //    // .set({ : "Timber", lastName: "Saw" })
    // .groupBy()
    // .orderBy()
    const res = await this.datasource
      .createQueryBuilder()
      .select('select count(t2.id) value, t3.class_name from students AS t2')
      .innerJoin(Classes, 't3', 't2.id = t3.id')
      //.where("jobs.user_id != :id", { id: user_id })
      .groupBy('t2.class_id')
      //.orderBy('jobViews_total_count', 'DESC')
      //.limit(limit)
      //.offset(offset)
      //.getRawMany();
      //.where("id = :id", { id: 1 })
      .execute();
    // return this.reportsService.find();
    return res;
  }
}
