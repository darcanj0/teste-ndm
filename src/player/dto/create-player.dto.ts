import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @ApiProperty({
    example: 'Daniel Thomas',
    type: String,
  })
  name: string;

  @IsInt()
  @Max(100)
  @Min(18)
  @ApiProperty({
    example: 18,
    type: Number,
  })
  age: number;
}
