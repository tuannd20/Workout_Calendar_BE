import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/exception.filter';
import { SetService } from 'src/services';
import { CreateSetSwaggerDto } from 'src/swagger/dtos';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Set')
@Controller('Set')
@UseFilters(HttpExceptionFilter)
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Post()
  @ApiOperation({
    summary: 'Creates a new set',
  })
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateSetSwaggerDto })
  createSet(@Body() data: CreateSetSwaggerDto) {
    return this.setService.createSet(data);
  }
}
