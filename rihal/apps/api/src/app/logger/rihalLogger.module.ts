
import { Module } from '@nestjs/common';
import { RihalLoggerService } from './rihal-logger.service';

@Module({
  providers: [RihalLoggerService],
  exports: [RihalLoggerService],
})
export class RihalLoggerModule {}
