import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSetSwaggerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;
}
