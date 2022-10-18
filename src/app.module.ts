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
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
