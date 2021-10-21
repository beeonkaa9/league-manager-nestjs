import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateTeamStatusDto } from '../dtos/update-team-status.dto';
import { UpdateTeamDto } from '../dtos/update-team.dto';
import { Team } from '../models/team.entity';

export interface ITeamRepository {
  createTeam(team: Team): Promise<Team>;
  findTeamById(id: string): Promise<Team>;
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
  /**
   * saves a team to the database
   * @param {Team} team
   * @returns {Promise<Team>}
   */
  public async createTeam(team: Team): Promise<Team> {
    return await this.save(team);
  }

  /**
   * filters team by id
   * @param {string} id
   * @returns {Promise<Team>}
   */
  public async findTeamById(id: string): Promise<Team> {
    // try {
    //   return await this.findOneOrFail(id);
    // } catch {
    //   throw new NotFoundException('this id does not exist in the teams table');
    // }
    return await this.findOne(id);
  }

  /**
   * updates team, saves changes to database
   * @param {Team} team
   * @param {UpdateTeamDto} updateTeamDto
   * @returns {Promise<Team>}
   */
  public async updateTeamById(
    team: Team,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamDto });
  }

  /**
   * updates the status for team
   * @param {Team} team
   * @param {updateTeamStatusDto} updateTeamStatusDto
   * @returns {Promise<Team>}
   */
  public async updateTeamStatus(
    team: Team,
    updateTeamStatusDto: UpdateTeamStatusDto,
  ): Promise<Team> {
    return await this.save({ ...team, ...updateTeamStatusDto });
  }

  /**
   * deletes a team from the database
   * @param {Team} team
   * @returns {Promise<Team>}
   */
  public async deleteTeam(team: Team): Promise<Team> {
    return await this.remove(team);
  }
}
