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
import {
  WorkoutController,
  SetController,
  ExerciseController,
} from './controllers';
import { WorkoutService, SetService, ExerciseService } from './services';
import {
  WorkoutRepository,
  SetRepository,
  ExerciseRepository,
} from './repositories';

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
  controllers: [WorkoutController, SetController, ExerciseController],
  providers: [
    WorkoutService,
    WorkoutRepository,
    SetService,
    SetRepository,
    ExerciseService,
    ExerciseRepository,
  ],
})
export class AppModule {}
