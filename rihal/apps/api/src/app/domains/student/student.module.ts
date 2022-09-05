import { Module, OnApplicationBootstrap } from '@nestjs/common';

import { Student } from './entities/student.entity';
import { Classes } from './entities/classes.entity';
import { Countries } from './entities/countries.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedingService } from 'apps/api/src/seeding.service';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { ReportsController } from './reporting/reports.controller';
import { ReportsService } from './reporting/reports.service';
@Module({
 imports: [TypeOrmModule.forFeature([Student, Classes, Countries])],
  controllers: [
    StudentController,
   CountriesController,
   ClassesController,
  ReportsController,
  ],
  providers: [
   StudentService,
   CountriesService,
   ClassesService,
   ReportsService,
  SeedingService,
  ],
})
export class StudentModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}
  async onApplicationBootstrap(): Promise<void> {
    for (let i = 0; i < 10; i++) 
       await this.seedingService.seedCountries();
    
  }
}
