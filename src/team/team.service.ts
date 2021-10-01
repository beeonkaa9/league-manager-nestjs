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

  /**
   * creates a team
   * @param {CreateTeamDto} createTeamDto
   * @returns {Promise<Team | Error>}
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

  /**
   * returns a team
   * @param {string} id
   * @returns {Promise<Team>}
   */
  async findTeamById(id: string): Promise<Team> {
    return await this.teamRepository.findTeamById(id);
  }

  /**
   * returns all matches a team has participated in
   * @param {string} id
   * @returns {Promise<Team>}
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

  /**
   * finds members with id (team_id from member), status, and role matching parameters
   * @param {string} id
   * @param {Status} status
   * @param {Role} role
   * @returns {Promise<Member[] |  Error>}
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

  /**
   * calculates the wins, losses, players, and matches of a team
   * @param {string} id
   * @returns {Promise<TeamStatsDto | Error>}
   */
  async getTeamStats(id: string): Promise<TeamStatsDto | Error> {
    await this.teamRepository.findTeamById(id);
    try {
      const teamStatsDto = new TeamStatsDto();
      teamStatsDto.win = await this.matchRepository.countWins(id);
      teamStatsDto.loss = await this.matchRepository.countLosses(id);
      teamStatsDto.players = await this.memberRepository.getMemberCount(id);
      teamStatsDto.matches = await this.matchRepository.countMatches(id);

      return teamStatsDto;
    } catch (e) {
      return e;
    }
  }

  /**
   * updates team; saves changes to database
   * @param {string} id
   * @param {UpdateTeamDto} updateTeamDto
   * @returns {Promise<Team | Error>}
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

  /**
   * updates a team's status
   * @param {string} id
   * @param {UpdateTeamStatusDto} updateTeamStatusDto
   * @returns {Promise<Team | Error>}
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

  /**
   * deletes a team from the database
   * @param {string} id
   * @returns {Promise<Team | Error>}
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
