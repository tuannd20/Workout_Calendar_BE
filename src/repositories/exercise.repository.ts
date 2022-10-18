import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseHandler } from 'src/common/filters/response.handler';
import { ExerciseEntity } from 'src/entities';
import { CreateExerciseDto } from 'src/dtos';

@Injectable()
export class ExerciseRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: Repository<ExerciseEntity>,
  ) {}

  async createExercise(body: CreateExerciseDto) {
    try {
      const result = await this.exerciseRepository.save(body);

      return new ResponseHandler(true, result, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }
}
