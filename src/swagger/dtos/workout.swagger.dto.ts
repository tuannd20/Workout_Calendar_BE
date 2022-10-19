import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWorkoutSwaggerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumber({}, { each: true })
  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: 'number' })
  exerciseIds: number[];

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  date: Date;
}
