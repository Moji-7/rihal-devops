import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';


import Joi = require('joi');

@Module({
  imports: [ConfigModule.forRoot({
    //envFilePath: ['enviroments/environment.ts', 'enviroments/environment.prod.ts'],
    // validationSchema: Joi.object({
    //   JWT_SECRET: Joi.string().required(),
    //   JWT_EXPIRATION_TIME: Joi.string().required(),
    // })
  }),
  AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
