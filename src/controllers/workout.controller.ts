import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/exception.filter';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateWorkoutSwaggerDto } from 'src/swagger/dtos';
import { WorkoutService } from 'src/services';

@ApiTags('Workout')
@Controller('Workout')
@UseFilters(HttpExceptionFilter)
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  @ApiOperation({
    summary: 'Creates a new workout',
  })
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateWorkoutSwaggerDto })
  createSet(@Body() data: CreateWorkoutSwaggerDto) {
    return this.workoutService.create(data);
  }
}
