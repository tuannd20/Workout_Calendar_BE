import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseSwaggerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  set: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  workoutId: number;
}
