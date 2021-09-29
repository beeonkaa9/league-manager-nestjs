import { Injectable } from '@nestjs/common';
import { Match } from 'src/match/models/match.entity';
import { MatchRepository } from 'src/match/repositories/match.repository';
import { MemberRepository } from 'src/member/repositories/member.repository';
import { Member } from '../member/models/member.entity';
import { Role, Status } from '../person/models/person.entity';
import { CreateTeamDto } from './dtos/create-team.dto';
import { TeamStatsDto } from './dtos/team-stats.dto';
import { UpdateTeamStatusDto } from './dtos/update-team-status.dto';
import { UpdateTeamDto } from './dtos/update-team.dto';
import { TeamMapper } from './mappers/team.map';
import { Team } from './models/team.entity';
import { TeamRepository } from './repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(
    private teamRepository: TeamRepository,
    private memberRepository: MemberRepository,
    private matchRepository: MatchRepository,
  ) {}
  /*
    POST /team:
    Create a team
  */
  async createTeam(createTeamDto: CreateTeamDto): Promise<Team | Error> {
    try {
      const team = TeamMapper.toDomain(createTeamDto);

      return await this.teamRepository.createTeam(team);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    GET /team/{id}
    returns a team
  */
  async findTeamById(id: string): Promise<Team | Error> {
    try {
      return await this.teamRepository.findTeamById(id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    GET /team/{id}/matches
    returns all matches a team has participated in
  */
  async findTeamMatches(id: string): Promise<Match[] | Error> {
    try {
      await this.teamRepository.findTeamById(id);
      return await this.matchRepository.getTeamMatches(id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    GET /team/{id}/member
    returns the members in a team (array of members)
  */
  async findTeamMembers(
    id: string,
    status?: Status,
    role?: Role,
  ): Promise<Member[] | Error> {
    try {
      await this.teamRepository.findTeamById(id);
      return await this.memberRepository.getTeamMembers(id, status, role);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    GET /team/{id}/stats
    returns the stats 
  */
  //calculate the wins and losses; return count of teams; return count of matches
  //return this as a JSON
  async getTeamStats(id: string): Promise<TeamStatsDto> {
    //calculate wins and losses
    const teamStatsDto: TeamStatsDto = {
      win: null,
      loss: null,
      players: null,
      matches: null,
    };
    teamStatsDto.win = await this.matchRepository.countWins(id);
    teamStatsDto.loss = await this.matchRepository.countLosses(id);
    teamStatsDto.players = await this.memberRepository.getMemberCount(id);
    teamStatsDto.matches = await this.matchRepository.countMatches(id);

    return teamStatsDto;
  }

  /*
    PATCH /team/{id}
    updates a team
  */
  async updateTeamById(
    id: string,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Team | Error> {
    const team: Team = await this.teamRepository.findTeamById(id);
    try {
      return await this.teamRepository.updateTeamById(team, updateTeamDto);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    PATCH /team/status
    updates a team's status
  */
  async updateTeamStatus(
    id: string,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team | Error> {
    const team: Team = await this.teamRepository.findTeamById(id);
    try {
      return this.teamRepository.updateTeamStatus(team, updateTeamStatusDto);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    Delete /team/{id}
    deletes a team
  */
  async removeTeam(id: string): Promise<Team | Error> {
    try {
      const team = await this.teamRepository.findTeamById(id);
      return await this.teamRepository.deleteTeam(team);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
