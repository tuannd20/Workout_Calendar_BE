import { Injectable } from '@nestjs/common';
import { SetRepository } from 'src/repositories';
import { CreateSetDto } from 'src/dtos';

@Injectable()
export class SetService {
  constructor(private readonly setRepository: SetRepository) {}

  getAllSet() {
    return this.setRepository.getAllSet();
  }

  createSet(data: CreateSetDto) {
    return this.setRepository.createSetValue(data);
  }

  deleteSet(id: number) {
    return this.setRepository.deleteSet(id);
  }
}
