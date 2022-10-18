import { Injectable } from '@nestjs/common';
import { SetRepository } from 'src/repositories';
import { CreateSetDto } from 'src/dtos';

@Injectable()
export class SetService {
  constructor(private readonly setRepository: SetRepository) {}

  createSet(data: CreateSetDto) {
    return this.setRepository.createSetValue(data);
  }
}
