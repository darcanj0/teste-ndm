import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PlayerModule, TeamModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
