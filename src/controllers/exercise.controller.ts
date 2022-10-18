import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/exception.filter';
import { ExerciseService } from 'src/services';
import { CreateExerciseSwaggerDto } from 'src/swagger/dtos';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Exercise')
@Controller('Exercise')
@UseFilters(HttpExceptionFilter)
export class ExerciseController {
  constructor(private readonly setService: ExerciseService) {}

  @Post()
  @ApiOperation({
    summary: 'Creates a new exercise',
  })
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateExerciseSwaggerDto })
  createSet(@Body() data: CreateExerciseSwaggerDto) {
    return this.setService.createExercise(data);
  }
}
