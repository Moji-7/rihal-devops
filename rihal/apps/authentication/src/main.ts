/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders:['content-type','Authorization'],
    origin:'http://localhost:4200',
    credentials:true
  })

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000
    }
  })
  await app.startAllMicroservices();

  await app.listen(3000);
  Logger.log('Auth microservice running 🚀');
}








bootstrap();
