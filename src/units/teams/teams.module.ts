import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { Team } from 'src/models/teams/teams.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Team])],
  providers: [TeamsService],
  controllers: [TeamsController]
})
export class TeamsModule {}
