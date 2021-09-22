import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Team } from '../models/team.entity';

export interface ITeamRepository {
  createTeam(team: Team): Promise<Team>;
  findTeamById(id: string): Promise<Team>;
  //   //any will most likely change; any for now since I don't think it can be Team[]
  //   getTeamMatches(id: string): Promise<any>;
  //   getTeamMembers(id: string): Promise<Team[]>;
  //   //will most likely take in Team and UpdateTeamDto; will return Promise<Team>
  //   updateTeamById();
  //   //will most likely take in UpdateTeamStatusDto; will return Promise<Team>
  //   updateTeamStatus();
  //   deleteTeam(id: string): Promise<Team>;
}

@Injectable()
@EntityRepository(Team)
export class TeamRepository
  extends Repository<Team>
  implements ITeamRepository
{
  public async createTeam(team: Team): Promise<Team> {
    return await this.save(team);
  }

  public async findTeamById(id: string): Promise<Team> {
    try {
      return await this.findOneOrFail(id);
    } catch {
      throw new NotFoundException('this id does not exist in the teams table');
    }
  }
}
