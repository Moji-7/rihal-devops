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
      url: "postgres://dyjinesbtbjwab:fad4f80e287db7a0781b527e964902970452bd4677ef33eaae64c773e67e2442@ec2-44-210-36-247.compute-1.amazonaws.com:5432/d2m7n1a4j8m4nn",
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
