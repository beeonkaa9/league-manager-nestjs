import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { MatchRepository } from './repositories/match.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MatchRepository])],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
