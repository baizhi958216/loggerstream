import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateLoggerDto } from '../model/dto/create-logger.dto';
import { LoggerService } from '../service/logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  create(@Body() createLoggerDto: CreateLoggerDto) {
    return this.loggerService.create(createLoggerDto);
  }

  @Get()
  findAll() {
    return this.loggerService.findAll();
  }
}
