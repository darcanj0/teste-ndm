import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    required: true,
    example: 'any_email@gmail.com',
  })
  email: string;

  @IsString()
  @MaxLength(10)
  @MinLength(6)
  @ApiProperty({
    required: true,
    example: 'any_pass',
  })
  password: string;
}
