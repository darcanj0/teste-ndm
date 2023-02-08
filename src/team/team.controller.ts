import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamService } from './team.service';

@Controller('team')
@ApiTags('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(AuthGuard())
  @Post()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'creates a new team',
  })
  async createTeam(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }
}
