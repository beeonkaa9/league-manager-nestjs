import { Injectable } from '@nestjs/common';
import { LeagueError } from '../core/errors/league-error';
import { Match } from 'src/match/models/match.entity';
import { MatchRepository } from '../match/repositories/match.repository';
import { MemberRepository } from '../member/repositories/member.repository';
import { Member } from '../member/models/member.entity';
import { Role, Status } from '../person/models/person.entity';
import { CreateTeamDto } from './dtos/create-team.dto';
import { TeamStatsDto } from './dtos/team-stats.dto';
import { UpdateTeamStatusDto } from './dtos/update-team-status.dto';
import { UpdateTeamDto } from './dtos/update-team.dto';
import {
  FindTeamMatchesError,
  FindTeamMatchesQueryError,
  FindTeamMembersError,
  GetTeamMembersQueryError,
  GetTeamStatsError,
  RemoveTeamError,
  TeamDtoNotMappedError,
  TeamIdNotFoundError,
  TeamMemberInvalidInputError,
  TeamNotDeletedError,
  TeamNotSavedError,
  TeamStatsQueryError,
  UpdatedTeamStatusNotSavedError,
  UpdateTeamByIdError,
  UpdateTeamStatusError,
} from './errors';
import { TeamMapper } from './mappers/team.map';
import { Team } from './models/team.entity';
import { TeamRepository } from './repositories/team.repository';
import { CreateTeamError } from './errors/create-team-error';
import { FindTeamByIdError } from './errors/find-team-by-id-error';
import { UpdatedTeamNotSavedError } from './errors/updated-team-not-saved-error';

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
   * @returns {Promise<Team | LeagueError>}
   */
  async createTeam(createTeamDto: CreateTeamDto): Promise<Team | LeagueError> {
    try {
      const team = TeamMapper.toDomain(createTeamDto);
      if (!team) {
        throw new TeamDtoNotMappedError();
      }
      const newTeam = await this.teamRepository.createTeam(team);
      if (!newTeam) {
        throw new TeamNotSavedError();
      }
      return newTeam;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new CreateTeamError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * returns a team
   * @param {string} id
   * @returns {Promise<Team | LeagueError>}
   */
  async findTeamById(id: string): Promise<Team | LeagueError> {
    try {
      const team = await this.teamRepository.findTeamById(id);
      if (!team) {
        throw new TeamIdNotFoundError(id);
      }
      return team;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FindTeamByIdError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * returns all matches a team has participated in
   * @param {string} id
   * @returns {Promise<Match[] | LeagueError>}
   */
  async findTeamMatches(id: string): Promise<Match[] | LeagueError> {
    try {
      const teamExists = await this.teamRepository.findTeamById(id);
      if (!teamExists) {
        throw new TeamIdNotFoundError(id);
      }
      const teamMatches = await this.matchRepository.getTeamMatches(id);
      if (!teamMatches) {
        throw new FindTeamMatchesQueryError();
      }
      return teamMatches;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FindTeamMatchesError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * finds members with id (team_id from member), status, and role matching parameters
   * @param {string} id
   * @param {Status} status
   * @param {Role} role
   * @returns {Promise<Member[] | LeagueError>}
   */
  async findTeamMembers(
    id: string,
    status?: Status,
    role?: Role,
  ): Promise<Member[] | LeagueError> {
    try {
      //search for team
      const teamExists = await this.teamRepository.findTeamById(id);
      if (!teamExists) {
        throw new TeamIdNotFoundError(id);
      }

      //ensure that status and role inputs are valid enum values
      if (status != null && !(status in Status)) {
        throw new TeamMemberInvalidInputError(
          'Status must be active, inactive, or suspended',
        );
      }
      if (role != null && !(role in Role)) {
        throw new TeamMemberInvalidInputError(
          'Role must be Manager, Coach, Referee, Linesman, MedicalStaff, Captain, ScoreKeeper, Goalkeeper, RightFullback, LeftFullback, CenterBack, Sweeper, DefendingMidfielder, RightMidfielder, CentralMidfielder, Striker, AttackingMidfielder, or LeftMidfielder',
        );
      }

      //execute query for finding team members
      const teamMembers = await this.memberRepository.getTeamMembers(
        id,
        status,
        role,
      );
      if (!teamMembers) {
        throw new GetTeamMembersQueryError();
      }
      return teamMembers;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      return new FindTeamMembersError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * calculates the wins, losses, players, and matches of a team
   * @param {string} id
   * @returns {Promise<TeamStatsDto | LeagueError>}
   */
  async getTeamStats(id: string): Promise<TeamStatsDto | LeagueError> {
    try {
      //search to see if team exists
      const teamExists = await this.teamRepository.findTeamById(id);
      if (!teamExists) {
        throw new TeamIdNotFoundError(id);
      }

      //create teamStatsDto and update values for each property
      const teamStatsDto = new TeamStatsDto();
      teamStatsDto.win = await this.matchRepository.countWins(id);
      if (!teamStatsDto.win) {
        throw new TeamStatsQueryError(
          'query that counts wins failed to execute correctly',
        );
      }

      teamStatsDto.loss = await this.matchRepository.countLosses(id);
      if (!teamStatsDto.loss) {
        throw new TeamStatsQueryError(
          'query that counts losses failed to execute correctly',
        );
      }

      teamStatsDto.players = await this.memberRepository.getMemberCount(id);
      if (!teamStatsDto.players) {
        throw new TeamStatsQueryError(
          'query that counts players failed to execute correctly',
        );
      }

      teamStatsDto.matches = await this.matchRepository.countMatches(id);
      if (!teamStatsDto.matches) {
        throw new TeamStatsQueryError(
          'query that counts matches failed to execute correctly',
        );
      }
      return teamStatsDto;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new GetTeamStatsError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * updates team; saves changes to database
   * @param {string} id
   * @param {UpdateTeamDto} updateTeamDto
   * @returns {Promise<Team | LeagueError>}
   */
  async updateTeamById(
    id: string,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Team | LeagueError> {
    try {
      //search for team
      const team: Team = await this.teamRepository.findTeamById(id);
      if (!team) {
        throw new TeamIdNotFoundError(id);
      }

      //update team
      const updatedTeam = await this.teamRepository.updateTeamById(
        team,
        updateTeamDto,
      );
      if (!updatedTeam) {
        throw new UpdatedTeamNotSavedError();
      }
      return updatedTeam;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new UpdateTeamByIdError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * updates a team's status
   * @param {string} id
   * @param {UpdateTeamStatusDto} updateTeamStatusDto
   * @returns {Promise<Team | LeagueError>}
   */
  async updateTeamStatus(
    id: string,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team | LeagueError> {
    try {
      //search for team
      const team: Team = await this.teamRepository.findTeamById(id);
      if (!team) {
        throw new TeamIdNotFoundError(id);
      }

      //update team status
      const updatedTeamStatus = this.teamRepository.updateTeamStatus(
        team,
        updateTeamStatusDto,
      );
      if (!updatedTeamStatus) {
        throw new UpdatedTeamStatusNotSavedError();
      }
      return updatedTeamStatus;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new UpdateTeamStatusError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * deletes a team from the database
   * @param {string} id
   * @returns {Promise<Team | LeagueError>}
   */
  async removeTeam(id: string): Promise<Team | LeagueError> {
    try {
      const team: Team = await this.teamRepository.findTeamById(id);
      if (!team) {
        throw new TeamIdNotFoundError(id);
      }

      //delete team
      const deletedMember = await this.teamRepository.deleteTeam(team);
      if (!deletedMember) {
        throw new TeamNotDeletedError();
      }
      return deletedMember;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new RemoveTeamError(`${e.name}: ${e.message}`);
    }
  }
}
