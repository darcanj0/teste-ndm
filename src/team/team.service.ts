import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  private async findTeam(name: string) {
    const team = await this.prisma.team.findUnique({
      where: { name },
    });
    return team;
  }

  async createTeam(dto: CreateTeamDto) {
    const { name } = dto;
    const team = await this.findTeam(name);
    if (team) throw new UnprocessableEntityException('Team already exists');
    await this.prisma.team.create({
      data: { name },
    });
  }
}
