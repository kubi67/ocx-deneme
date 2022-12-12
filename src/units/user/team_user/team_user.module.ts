import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamUser } from 'src/models/users/team_user.entity';
import { TeamUserController } from './team_user.controller';
import { TeamUserService } from './team_user.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeamUser])],
  providers: [TeamUserService],
  controllers: [TeamUserController],
  exports: [TeamUserService],
})
export class TeamUserModule {}
