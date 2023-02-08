import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  // private async findPlayer(name: string) {
  //   const player = await this.prisma.player.findUnique({
  //     where: { name },
  //   });
  //   return player;
  // }

  async createPlayer(dto: CreatePlayerDto) {
    const { name, age } = dto;
    return this.prisma.player.create({
      data: { name, age },
    });
  }
}
