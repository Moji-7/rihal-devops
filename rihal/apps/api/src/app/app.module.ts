import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './domains/student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [StudentModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'tradenew',
     // entities: [Book],
      synchronize: true,
      dropSchema: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
