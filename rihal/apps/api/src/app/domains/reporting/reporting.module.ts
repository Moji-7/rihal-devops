import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RihalLoggerModule } from '../../logger';

import { Classes } from '../student/entities/classes.entity';
import { Countries } from '../student/entities/countries.entity';
import { Student } from '../student/entities/student.entity';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [RihalLoggerModule,
    TypeOrmModule.forFeature([Student, Classes, Countries]),

  ],
  controllers: [ReportsController],
  providers: [ReportsService,RihalLoggerModule],
})
export class ReportingModule {}
