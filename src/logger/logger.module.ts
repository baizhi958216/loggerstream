import { Module } from '@nestjs/common';
import { LoggerService } from './service/logger.service';
import { LoggerController } from './controller/logger.controller';

@Module({
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
