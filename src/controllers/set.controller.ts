import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/exception.filter';
import { SetService } from 'src/services';
import { CreateSetSwaggerDto } from 'src/swagger/dtos';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessGetSetEntity } from 'src/swagger/entities';

@ApiTags('Set')
@Controller('Set')
@UseFilters(HttpExceptionFilter)
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get()
  @ApiOperation({
    summary: 'Gets all set',
  })
  @ApiOkResponse({
    description: 'A collection of holidays for the specified page.',
    type: SuccessGetSetEntity,
  })
  getAll() {
    return this.setService.getAllSet();
  }

  @Post()
  @ApiOperation({
    summary: 'Creates a new set',
  })
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateSetSwaggerDto })
  createSet(@Body() data: CreateSetSwaggerDto) {
    return this.setService.createSet(data);
  }

  @Delete('/:setId')
  @ApiOperation({
    summary: 'Deletes the set with the specified identifier',
  })
  deleteSet(@Param('setId', ParseIntPipe) setId: number) {
    return this.setService.deleteSet(setId);
  }
}
