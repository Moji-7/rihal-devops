/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */


import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {  NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import {  RihalLoggerService } from './app/logger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  })
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

 // Initialize global exception filter


//  const logger = app.select(AppModule).get(AppLoggerService, {strict: true});
// app.useGlobalFilters(new AllExceptionsFilter(httpRef, logger));

  const config = new DocumentBuilder()
    .setTitle('learnify app APIs')
    .setDescription('The rihals assessment API description')
    .setVersion('1.0')
    .addTag('Student/Reports')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

 //custom logger
  //app.useLogger(new RihalLoggerService());

  const port = process.env.PORT || 3333;
  await app.listen(port);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
