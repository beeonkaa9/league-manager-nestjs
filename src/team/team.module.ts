import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamRepository } from './repositories/team.repository';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeamRepository])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
