import { Module } from '@nestjs/common';

import { StudentModule } from './domains/student/student.module';
import { ReportingModule } from './domains/reporting/reporting.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RihalLoggerModule, RihalLoggerService } from './logger';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    StudentModule,
    ReportingModule,
    RihalLoggerModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //
      // // locally database
      // type: 'postgres',
      // host: 'localhost', //configService.get<string>('DATABASE_HOST'),
      // port: 5432, //parseInt(configService.get<string>('DATABASE_PORT')),
      // username: 'postgres', //configService.get<string>('DATABASE_USER'),
      // password: 'root', //configService.get<string>('DATABASE_PASS'),
      // database: 'rihaldb', //configService.get<string>('DATABASE_NAME'),
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // synchronize: true, // This for development
      // autoLoadEntities: true,

      //1 elephentSQL
        type: 'postgres',
        url: 'postgres://kfawlatn:dUMCryTxhvULGBSAYPA-3pazDHSbE30k@dumbo.db.elephantsql.com/kfawlatn',
        synchronize: true,
       // logging: true,
        autoLoadEntities: true,
        entities: ['dist/**/*.entity{.ts,.js}'],

      // //2 heroku
      // url: 'postgres://dyjinesbtbjwab:fad4f80e287db7a0781b527e964902970452bd4677ef33eaae64c773e67e2442@ec2-44-210-36-247.compute-1.amazonaws.com:5432/d2m7n1a4j8m4nn',
      // ssl: {
      //   rejectUnauthorized: false,
      // },
      // entities: ['dist/**/*.entity{.ts,.js}'],
      //3 local host
    }),
      ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'admin-portal'),
    }),
  ],
  controllers: [],
  providers: [RihalLoggerService],
  // exports:[RihalLoggerModule]
})
export class AppModule {}
