import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SetEntity, SetExerciseEntity } from 'src/entities';
import { CreateSetDto } from '../dtos';
import { ResponseHandler } from 'src/common/filters/response.handler';
import { ErrorException } from 'src/constants/errors';

@Injectable()
export class SetRepository {
  constructor(
    @InjectRepository(SetEntity)
    private readonly repository: Repository<SetEntity>,
  ) {}

  async getAllSet() {
    try {
      const result = await this.repository.find();

      return new ResponseHandler(true, result, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }

  async createSetValue(body: CreateSetDto) {
    try {
      const data = await this.repository.save(body);

      return new ResponseHandler(true, data, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }

  async deleteSet(id: number) {
    try {
      const currentSet = await this.repository.findOne({
        where: { id },
      });

      if (!currentSet) {
        throw new BadRequestException(ErrorException.SET_NOT_EXISTS);
      }

      await this.repository.softDelete(id);
      // await this.repository.manager.transaction(async (transactionManager) => {
      //   try {
      //     transactionManager.softDelete(SetEntity, { id });
      //     transactionManager.delete(SetExerciseEntity, {
      //       exerciseId: id,
      //     });
      //   } catch (error) {
      //     throw error;
      //   }
      // });

      return { success: true };
    } catch (error) {
      if (error.status !== 500) {
        throw error;
      }
      return new InternalServerErrorException();
    }
  }
}
