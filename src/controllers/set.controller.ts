import {
  Controller,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/exception.filter';

@Controller()
@UseFilters(HttpExceptionFilter)
export class SetController {
    
}