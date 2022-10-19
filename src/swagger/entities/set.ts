import { ApiProperty } from '@nestjs/swagger';

export class SuccessGetSetEntity {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({
    example: {
      id: 1,
      type: 'string',
    },
  })
  data: any;

  @ApiProperty({ example: 200 })
  statusCode: number;
}
