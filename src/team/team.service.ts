import {
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPlayerToTeamDto, CreateTeamDto } from './dto/dto';

@Injectable()
export class TeamService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  findTeams() {
    return this.prisma.team.findMany({
      select: {
        id: true,
        name: true,
        players: {
          select: {
            id: true,
            age: true,
            name: true,
          },
        },
      },
    });
  }

  private async findTeamByName(name: string) {
    const team = await this.prisma.team.findUnique({
      where: { name },
    });
    return team;
  }

  private async findTeamById(id: string) {
    const team = await this.prisma.team.findUnique({
      where: { id },
      include: {
        players: {
          select: {
            id: true,
            name: true,
            age: true,
          },
        },
      },
    });
    return team;
  }

  private async findPlayerById(id: string) {
    const player = await this.prisma.player.findUnique({
      where: { id },
    });
    return player;
  }

  async createTeam(dto: CreateTeamDto) {
    const { name } = dto;
    const team = await this.findTeamByName(name);
    if (team) throw new UnprocessableEntityException('Team already exists');
    return this.prisma.team.create({
      data: { name },
    });
  }

  async addPlayerToTeam(teamId: string, dto: AddPlayerToTeamDto) {
    const { playerId } = dto;

    const team = await this.findTeamById(teamId);
    if (!team) throw new NotFoundException('Team does not exist');

    const player = await this.findPlayerById(playerId);
    if (!player) throw new NotFoundException('Player does not exist');

    if (team.players.length >= 5)
      throw new UnprocessableEntityException('Team is at its maximum capacity');

    await this.prisma.player.update({
      where: { id: playerId },
      data: {
        team: {
          connect: { id: teamId },
        },
      },
    });
  }
}
