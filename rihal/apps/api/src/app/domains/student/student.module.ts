import { Module, OnApplicationBootstrap } from '@nestjs/common';

import { Student } from './entities/student.entity';
import { Classes } from './entities/classes.entity';
import { Countries } from './entities/countries.entity';
import { StudentClass } from './entities/studentClass.viewentity';

import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';

import { SeedingService } from '../../seeds/seeding.service';




@Module({
  imports: [TypeOrmModule.forFeature([Student, Classes, Countries,StudentClass])],
  controllers: [
    StudentController,
    CountriesController,
    ClassesController,
  ],
  providers: [
    StudentService,
    CountriesService,
    ClassesService,
    SeedingService,
  ],
})
export class StudentModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}
  async onApplicationBootstrap(): Promise<void> {
  //  await this.seedingDatabase();
  }

  private async seedingDatabase() {
    await this.seedingService.dropTables();
    for (let i = 0; i < 10; i++) await this.seedingService.seedBaseTables();
    for (let i = 0; i < 110; i++) await this.seedingService.seedStudent();
    // now set randows classes & countries for student
    await this.seedingService.seedStudentUpdate();
  }
}
