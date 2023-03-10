import { Body, Controller, Param, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddPlayerToTeamDto, CreateTeamDto } from './dto/dto';
import { TeamService } from './team.service';

@Controller('team')
@ApiTags('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'creates a new team',
  })
  async createTeam(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'adds a player to a team',
  })
  async addPlayerToTeam(
    @Param('id') teamId: string,
    @Body() dto: AddPlayerToTeamDto,
  ) {
    return this.teamService.addPlayerToTeam(teamId, dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Returns all teams',
  })
  async findTeams() {
    return this.teamService.findTeams();
  }
}
