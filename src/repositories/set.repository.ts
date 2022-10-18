import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SetEntity } from 'src/entities';

@Injectable()
export class SetRepository {
  constructor(
    @InjectRepository(SetEntity)
    private readonly repository: Repository<SetEntity>,
  ) {}

  createSetValue() {
    return 'Hello World!';
  }
}
