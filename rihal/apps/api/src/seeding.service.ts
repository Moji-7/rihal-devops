   import { Injectable, Logger } from '@nestjs/common';
    import { EntityManager } from 'typeorm';
import { Classes } from './app/domains/student/classes.entity';
import { Countries } from './app/domains/student/countries.entity';
import { Student } from './app/domains/student/student.entity';
import {InitialDatabaseSeed} from './moq/seeds/initialSeed';


   // import { RoleEntity } from 'src/entities/role.entity';


   // import { roleSeeds } from 'src/seeds/role.seeds';

    @Injectable()
    export class SeedingService {
      constructor(
        private readonly entityManager: EntityManager,
      ) {}

      async seed(): Promise<void> {
        // Replace with your own seeds
        await Promise.all([
          this.entityManager.save(Countries, InitialDatabaseSeed("countries")),
         // this.entityManager.save(Classes, InitialDatabaseSeed("classes")),
         // this.entityManager.save(Student, InitialDatabaseSeed("student")),
        ]);

      }
    }
