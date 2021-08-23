import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team.dto';
import { Team } from './models/team.entity';

@Injectable()
export class TeamService {
  private readonly teams: Team[] = [];

  /*
    POST /team:
    Create a team
  */
  createTeam(createTeamDto: CreateTeamDto) {
    return 'creates a new team';
  }

  /*
    GET /team/{id}
    returns a team
  */
  findTeamById(id: string) {
    return 'finds a team by id';
  }

  /*
    GET /team/{id}/matches
    returns all matches a team has participated in
  */
  findTeamMatches(id: string) {
    return 'finds the matches a team has played in';
  }

  /*
    GET /team/{id}/member
    returns the members in a team (array of members)
  */
  findTeamMember(id: string, status?: string, role?: string) {
    return 'gets array of team members';
  }

  /*
    GET /team/{id}/stats
    returns the stats 
  */
  findTeamStats() {
    return 'this returns stats for a team';
  }

  /*
    PATCH /team/{id}
    updates a team
  */
  updateTeamId(id: string, body: string) {
    return 'posts an update for team';
  }

  /*
    PATCH /team/status
    updates a team's status
  */
  updateTeamStatus(id: string, body: string) {
    return 'posts a status update for team';
  }

  /*
    Delete /team/{id}
    deletes a team
  */
  removeTeam(id: string) {
    return 'deletes a team';
  }
}
