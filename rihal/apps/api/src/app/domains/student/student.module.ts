import { Module, OnApplicationBootstrap } from '@nestjs/common';

import { Student } from './student.entity';
import { Classes } from './classes.entity';
import { Countries } from './countries.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedingService } from 'apps/api/src/seeding.service';
import { countriesService } from './country.service';
@Module({
  imports: [TypeOrmModule.forFeature([Student, Classes, Countries])],
  controllers: [StudentController],
  providers: [StudentService, countriesService,SeedingService],
})
export class StudentModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}

  async onApplicationBootstrap(): Promise<void> {
    for (let i = 0; i < 10; i++) {
     // await this.seedingService.seed();
    }
  }
}
