import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @ApiProperty({
    example: 'Pain Gaming',
    type: String,
  })
  name: string;
}

export class AddPlayerToTeamDto {
  @IsUUID()
  @ApiProperty({
    example: 'insert player id here',
    type: String,
  })
  playerId: string;
}
