import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @ApiProperty({
    example: 'Pain Gaming',
    type: String,
  })
  name: string;
}
