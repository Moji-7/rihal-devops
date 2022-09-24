import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RihalLoggerModule } from '../../logger';

import { Classes } from '../student/entities/classes.entity';
import { Countries } from '../student/entities/countries.entity';
import { Student } from '../student/entities/student.entity';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [RihalLoggerModule,
    TypeOrmModule.forFeature([Student, Classes, Countries]),
    ClientsModule.register([
      {
        name: 'AUTH_CLIENT',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4000,
        },
      },
    ]),
    // ClientsModule.registerAsync([
    //   {
    //     name: 'NOTIFICATIONS_SERVICE',
    //     inject: [appConfig.KEY],
    //     useFactory: async (config: ConfigType<typeof appConfig>) => ({
    //       transport: Transport.RMQ,
    //       options: {
    //         urls: config.microservices.rabbitMqUrls,
    //         queue: 'notifications',
    //         queueOptions: {
    //           durable: true,
    //         },
    //       },
    //     }),
    //   },
    // ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService,RihalLoggerModule],
})
export class ReportingModule {}
