import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from 'src/member/member.module';
import { MemberRepository } from 'src/member/repositories/member.repository';
import { TeamRepository } from './repositories/team.repository';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamRepository, MemberRepository]),
    MemberModule,
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
