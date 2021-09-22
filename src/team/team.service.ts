import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamDto } from './dtos/create-team.dto';
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
  async findTeamById(id: string) {
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
  
  async findTeamMember(id: string, status?: string, role?: string) {
    return 'gets array of team members';
  }

  /*
    GET /team/{id}/stats
    returns the stats 
  
  async findTeamStats() {
    return 'this returns stats for a team';
  }

  /*
    PATCH /team/{id}
    updates a team
  
  async updateTeamId(id: string, body: string) {
    return 'posts an update for team';
  }

  /*
    PATCH /team/status
    updates a team's status
  
  async updateTeamStatus(id: string, body: string) {
    return 'posts a status update for team';
  }

  /*
    Delete /team/{id}
    deletes a team
  
  async removeTeam(id: string) {
    return 'deletes a team';
  }
  */
}
