import { Injectable } from '@nestjs/common';
import { ExerciseRepository } from 'src/repositories';
import { CreateExerciseDto } from 'src/dtos';

@Injectable()
export class ExerciseService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  createExercise(data: CreateExerciseDto) {
    return this.exerciseRepository.createExercise(data);
  }
}
