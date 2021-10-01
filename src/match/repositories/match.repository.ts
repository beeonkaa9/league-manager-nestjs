import { Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, EntityRepository, Repository } from 'typeorm';
import { UpdateMatchDto } from '../dtos/update-match.dto';
import { Match } from '../models/match.entity';

export interface IMatchRepository {
  createMatch(match: Match): Promise<Match>;
  findMatchById(id: string): Promise<Match>;
  getTeamMatches(id: string): Promise<Match[]>;
  countWins(id: string): Promise<number>;
  countLosses(id: string): Promise<number>;
  countMatches(id: string): Promise<number>;
  updateMatch(match: Match, updateMatchDto: UpdateMatchDto): Promise<Match>;
  deleteMatch(match: Match): Promise<Match>;
}

@Injectable()
@EntityRepository(Match)
export class MatchRepository
  extends Repository<Match>
  implements IMatchRepository
{
  /**
   * Saves match object to the database
   * @param {Match} match
   * @returns {Promise<Match>}
   */
  public async createMatch(match: Match): Promise<Match> {
    return await this.save(match);
  }

  /**
   * Filters by id
   * @param {string} id
   * @returns {Promise<Match>}
   */
  public async findMatchById(id: string): Promise<Match> {
    try {
      return await this.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('this id does not exist in the match table');
    }
  }

  /**
   * filters by team_id (provided by the parameter), in this case home and away
   * @param {string} id
   * @returns {Promise<Match[]>}
   */
  public async getTeamMatches(id: string): Promise<Match[]> {
    //if id in home OR id in away, return row
    return await this.createQueryBuilder()
      .select('match')
      .from(Match, 'match')
      .where('match.home =:home', { home: id })
      .orWhere('match.away =:away', { away: id })
      .getMany();
  }

  /**
   * Counts wins for the team_id provided by the parameter
   * @param {string} id
   * @returns {Promise<number>}
   */
  public async countWins(id: string): Promise<number> {
    return await this.createQueryBuilder('match')
      .select('match.id')
      //count home wins
      .where(
        new Brackets((qb) => {
          qb.where('match.home = :home', { home: id }).andWhere(
            'match.home_score > match.away_score',
          );
        }),
      )
      //count away wins
      .orWhere(
        new Brackets((qb) => {
          qb.where('match.away = :away', { away: id }).andWhere(
            'match.away_score > match.home_score',
          );
        }),
      )
      .getCount();
  }

  /**
   * Counts losses for the team_id provided by the parameter
   * @param {string} id
   * @returns {Promise<number>}
   */
  public async countLosses(id: string): Promise<number> {
    return await this.createQueryBuilder('match')
      .select('match.id')
      //counts home losses
      .where(
        new Brackets((qb) => {
          qb.where('match.home = :home', { home: id }).andWhere(
            'match.away_score > match.home_score',
          );
        }),
      )
      //counts away losses
      .orWhere(
        new Brackets((qb) => {
          qb.where('match.away = :away', { away: id }).andWhere(
            'match.home_score > match.away_score',
          );
        }),
      )
      .getCount();
  }

  /**
   * Counts matches for the team_id provided by the parameter
   * @param {string} id
   * @returns {Promise<number>}
   */
  public async countMatches(id: string): Promise<number> {
    return await this.createQueryBuilder('match')
      .where('match.home = :home', { home: id })
      .orWhere('match.away = :away', { away: id })
      .getCount();
  }

  /**
   * Updates match and saves updates to the database
   * @param {Match} match
   * @param {UpdateMatchDto} updateMatchDto
   * @returns {Promise<Match>}
   */
  public async updateMatch(
    match: Match,
    updateMatchDto: UpdateMatchDto,
  ): Promise<Match> {
    return await this.save({ ...match, ...updateMatchDto });
  }

  /**
   * Deletes match from the database
   * @param {Match} match
   * @returns {Promise<Match>}
   */
  public async deleteMatch(match: Match): Promise<Match> {
    return await this.remove(match);
  }
}
