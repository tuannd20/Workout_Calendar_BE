import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseHandler } from 'src/common/filters/response.handler';
import { ExerciseEntity, SetExerciseEntity } from 'src/entities';
import { CreateExerciseDto } from 'src/dtos';

@Injectable()
export class ExerciseRepository {
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseRepository: Repository<ExerciseEntity>,
  ) {}

  async getAllExercise() {
    try {
      const result = await this.exerciseRepository.find({
        relations: {
          setExercise: {
            set: true,
          },
        },
      });

      return new ResponseHandler(true, result, 200);
    } catch (error) {
      if (error.status !== 500) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  async createExercise(body: CreateExerciseDto) {
    try {
      const { setIds } = body;
      // delete body.setIds;
      let newExercise: CreateExerciseDto & ExerciseEntity;

      const data = await this.exerciseRepository.manager.transaction(
        async (transactionManager) => {
          newExercise = await transactionManager.save(ExerciseEntity, body);
          const exerciseSet = setIds.map((setId) => {
            return { exerciseId: newExercise.id, setId };
          });
          transactionManager.save(SetExerciseEntity, exerciseSet);
          return newExercise;
        },
      );

      return new ResponseHandler(true, data, 200);
    } catch (error) {
      if (error.status !== 500) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }
}
