import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '../member/models/member.entity';
import { Role, Status } from '../person/models/person.entity';
import { CreateTeamDto } from './dtos/create-team.dto';
import { UpdateTeamStatusDto } from './dtos/update-team-status.dto';
import { UpdateTeamDto } from './dtos/update-team.dto';
import { TeamMapper } from './mappers/team.map';
import { Team } from './models/team.entity';
import { TeamRepository } from './repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamRepository) private teamRepository: TeamRepository,
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
  
  async findTeamMatches(id: string) {
    return 'finds the matches a team has played in';
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
      return await this.teamRepository.getTeamMembers(id, status, role);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
    GET /team/{id}/stats
    returns the stats 
  
  async getTeamStats() {
    return 'this returns stats for a team';
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
