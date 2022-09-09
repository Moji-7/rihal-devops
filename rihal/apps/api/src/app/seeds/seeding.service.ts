import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Classes } from '../domains/student/entities/classes.entity';

import { Countries } from '../domains/student/entities/countries.entity';
import { Student } from '../domains/student/entities/student.entity';

import {
  InitialCountrySeed,
  InitialClassesSeed,
  InitialStudentSeed,
} from './initialSeed';

// import { RoleEntity } from 'src/entities/role.entity';

// import { roleSeeds } from 'src/seeds/role.seeds';

@Injectable()
export class SeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async dropTables(): Promise<void> {
    await Promise.all([
      this.entityManager.query(
        `
          truncate TABLE student RESTART IDENTITY CASCADE;
          truncate TABLE  classes  RESTART IDENTITY CASCADE;
          truncate TABLE countries  RESTART IDENTITY CASCADE;
        `,
        null
      ),
      //this.entityManager.query(`delete from classes;`,null)
    ]);
  }
  async seedBaseTables(): Promise<void> {
    await Promise.all([
      this.entityManager.save(Countries, InitialCountrySeed('countries')),
      this.entityManager.save(Classes, InitialClassesSeed('classes')),
      //  this.entityManager.save(Student, InitialDatabaseSeed("student")),
    ]);
  }
  async seedStudent(): Promise<void> {
    await Promise.all([
      this.entityManager.save(Student, InitialStudentSeed('student')),
    ]);
  }
  async seedStudentUpdate(): Promise<void> {
    await Promise.all([
      this.entityManager.query(
        `
      update student set
      "classesId"=floor(random() * 9 + 1), "countriesId"=
      floor(random() * 9 + 1)
      WHERE id is not null;`,
        null
      ),
    ]);
  }
}
