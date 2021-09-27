import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateTeamStatusDto } from '../dtos/update-team-status.dto';
import { UpdateTeamDto } from '../dtos/update-team.dto';
import { Team } from '../models/team.entity';

export interface ITeamRepository {
  createTeam(team: Team): Promise<Team>;
  findTeamById(id: string): Promise<Team>;
  // getTeamMatches(id: string): Promise<Match[]>;
  // getTeamStats(id: string): Promise<any>;
  updateTeamById(team: Team, updateTeamDto: UpdateTeamDto): Promise<Team>;
  updateTeamStatus(
    team: Team,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team>;
  deleteTeam(team: Team): Promise<Team>;
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

  public async updateTeamById(
    team: Team,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamDto });
  }

  public async updateTeamStatus(
    team: Team,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamStatusDto });
  }

  public async deleteTeam(team: Team): Promise<Team> {
    return await this.remove(team);
  }
}
