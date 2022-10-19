import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutEntity } from 'src/entities';
import { CreateWorkoutDto } from 'src/dtos';
import { ResponseHandler } from 'src/common/filters/response.handler';

@Injectable()
export class WorkoutRepository {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly repository: Repository<WorkoutEntity>,
  ) {}

  async getAllWorkout() {
    try {
      const result = await this.repository.find();

      return new ResponseHandler(true, result, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }

  async createWorkout(body: CreateWorkoutDto) {
    try {
      const data = await this.repository.save(body);

      return new ResponseHandler(true, data, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }
}
