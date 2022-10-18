import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseOrmModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvService } from './database/env.service';

import {
  WorkoutEntity,
  ExerciseEntity,
  SetEntity,
  SetExerciseEntity,
} from './entities';
import { SetController } from './controllers';
import { SetService } from './services';
import { SetRepository } from './repositories';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: new EnvService().getEnvironmentFile(),
    }),
    DatabaseOrmModule(),
    TypeOrmModule.forFeature([
      WorkoutEntity,
      ExerciseEntity,
      SetEntity,
      SetExerciseEntity,
    ]),
  ],
  controllers: [SetController],
  providers: [SetService, SetRepository],
})
export class AppModule {}
