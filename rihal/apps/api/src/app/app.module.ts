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
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
	  // These two lines have been added:
  //seeds: ["src/moq/seeds/**/*{.ts,.js}"],
  //factories: ["src/moq/seeding/factories/**/*{.ts,.js}"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
