import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SetEntity } from 'src/entities';
import { CreateSetDto } from '../dtos';
import { ResponseHandler } from 'src/common/filters/response.handler';

@Injectable()
export class SetRepository {
  constructor(
    @InjectRepository(SetEntity)
    private readonly repository: Repository<SetEntity>,
  ) {}

  async createSetValue(body: CreateSetDto) {
    try {
      const data = await this.repository.save(body);

      return new ResponseHandler(true, data, 200);
    } catch (error) {
      return { success: false, error: error.response };
    }
  }
}
