import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchRepository } from 'src/match/repositories/match.repository';
import { MemberModule } from '../member/member.module';
import { MemberRepository } from '../member/repositories/member.repository';
import { TeamRepository } from './repositories/team.repository';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TeamRepository,
      MemberRepository,
      MatchRepository,
    ]),
    MemberModule,
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
