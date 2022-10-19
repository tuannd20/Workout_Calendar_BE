import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from 'src/repositories';
import { CreateWorkoutDto } from 'src/dtos';

@Injectable()
export class WorkoutService {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  create(body: CreateWorkoutDto) {
    return this.workoutRepository.createWorkout(body);
  }
}
