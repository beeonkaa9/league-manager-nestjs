import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MemberModule } from './member/member.module';
import { MatchModule } from './match/match.module';
import { TeamModule } from './team/team.module';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DatabaseModule,
    MemberModule,
    PersonModule,
    TeamModule,
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
