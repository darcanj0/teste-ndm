import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaClient,

    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<string> {
    const { email, password } = dto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid email and/or password');

    const isInvalidPassword = !(await bcrypt.compare(password, user.password));

    if (isInvalidPassword)
      throw new UnauthorizedException('Invalid email and/or password');

    const token = this.jwtService.sign({
      email,
    });

    return token;
  }
}
