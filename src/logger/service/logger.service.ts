import { Injectable } from '@nestjs/common';
import { CreateLoggerDto } from '../model/dto/create-logger.dto';

@Injectable()
export class LoggerService {
  create(createLoggerDto: CreateLoggerDto) {
    console.log(createLoggerDto);
    return 'This action adds a new logger';
  }

  findAll() {
    return `This action returns all logger`;
  }
}
