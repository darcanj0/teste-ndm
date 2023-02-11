import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async findPlayersWithoutTeams() {
    return this.prisma.player.findMany({
      where: {
        teamId: { equals: null },
      },
      select: {
        age: true,
        id: true,
        name: true,
      },
    });
  }

  async createPlayer(dto: CreatePlayerDto) {
    const { name, age } = dto;
    return this.prisma.player.create({
      data: { name, age },
    });
  }
}
