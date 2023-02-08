import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerService } from './player.service';

@Controller('player')
@ApiTags('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @UseGuards(AuthGuard())
  @Post()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'creates a new player',
  })
  async createPlayer(@Body() dto: CreatePlayerDto) {
    return this.playerService.createPlayer(dto);
  }
}
