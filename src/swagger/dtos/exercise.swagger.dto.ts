import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseSwaggerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  // @IsNumber()
  // @IsNotEmpty()
  // @ApiProperty()
  // workoutId: number;

  @IsNumber({}, { each: true })
  @IsNotEmpty()
  @ApiProperty({ isArray: true, type: 'number' })
  setIds: number[];
}
