   import { Injectable, Logger } from '@nestjs/common';
    import { EntityManager } from 'typeorm';
import { Classes } from './app/domains/student/entities/classes.entity';

import { Countries } from './app/domains/student/entities/countries.entity';
import { Student } from './app/domains/student/entities/student.entity';

import {InitialCountrySeed,InitialClassesSeed,InitialStudentSeed} from './moq/seeds/initialSeed';


   // import { RoleEntity } from 'src/entities/role.entity';


   // import { roleSeeds } from 'src/seeds/role.seeds';

    @Injectable()
    export class SeedingService {
      constructor(
        private readonly entityManager: EntityManager,
      ) {}

      async seedCountries(): Promise<void> {
        // Replace with your own seeds
        await Promise.all([
          this.entityManager.save(Countries, InitialCountrySeed("countries")),
       //this.entityManager.save(Classes, InitialDatabaseSeed("classes")),
        //  this.entityManager.save(Student, InitialDatabaseSeed("student")),
        ]);

      }
    }
