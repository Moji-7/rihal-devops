import { Module } from '@nestjs/common';

import { StudentModule } from './domains/student/student.module';
import { ReportingModule } from './domains/reporting/reporting.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RihalLoggerModule, RihalLoggerService } from './logger';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Question } from '../question/question.entity';
import { QuestionController } from '../question/question.controller';
import { QuestionService } from '../question/Question.service';


@Module({
  imports: [
    RihalLoggerModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'rihalDb.db',
      //entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      // entities:[User,UserLikes],
      entities: ['dist/**/*.entity{.ts,.js}',Question],
     // synchronize: true, // This for development
      autoLoadEntities: true,
      //entities: ['dist/**/*.entity{.ts,.js}'],
      // autoLoadEntities:true,
  
    }),

    TypeOrmModule.forFeature([Question]),
   StudentModule,
    ReportingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'admin-portal'),
    }),
    // ClientsModule.register([
    //   {
    //     name: 'AUTH_CLIENT',
    //     transport: Transport.TCP,
    //     options: {
    //       host: 'localhost',
    //       port: 4000,
    //     },
    //   },
    // ]),
  ],
  controllers: [QuestionController],
  providers: [RihalLoggerService,QuestionService],
  // exports:[RihalLoggerModule]
})
export class AppModule {}
