import {
  Body,
  Controller,
  Get,
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
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  @ApiOperation({
    summary: 'Gets all exercise',
  })
  getAll() {
    return this.exerciseService.getAllExercise();
  }

  @Post()
  @ApiOperation({
    summary: 'Creates a new exercise',
  })
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateExerciseSwaggerDto })
  createSet(@Body() data: CreateExerciseSwaggerDto) {
    return this.exerciseService.createExercise(data);
  }
}
