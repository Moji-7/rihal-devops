

import { Module } from '@nestjs/common';

import { StudentModule } from './domains/student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [StudentModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({

      type: 'postgres',
       host:"localhost", //configService.get<string>('DATABASE_HOST'),
        port:5432, //parseInt(configService.get<string>('DATABASE_PORT')),
        username:"postgres", //configService.get<string>('DATABASE_USER'),
        password:"root", //configService.get<string>('DATABASE_PASS'),
        database:"rihaldb", //configService.get<string>('DATABASE_NAME'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
        // These two lines have been added:
        //seeds: ["src/moq/seeds/**/*{.ts,.js}"],
        //factories: ["src/moq/seeding/factories/**/*{.ts,.js}"],
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
