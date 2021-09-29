import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
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
  public async createMatch(match: Match): Promise<Match> {
    return await this.save(match);
  }

  public async findMatchById(id: string): Promise<Match> {
    try {
      return await this.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('this id does not exist in the match table');
    }
  }

  public async getTeamMatches(id: string): Promise<Match[]> {
    //if id in home OR id in away, return row
    return await this.createQueryBuilder()
      .select('match')
      .from(Match, 'match')
      .where('match.home =:home', { home: id })
      .orWhere('match.away =:away', { away: id })
      .getMany();

    // return await query.getMany();
  }

  public async countWins(id: string): Promise<number> {
    const totalWins = await this.query(
      `SELECT COUNT(m.id) FROM match m, team t WHERE t.id = $1 AND ((t.id = m.home AND home_score > away_score) OR (t.id = m.away AND away_score > home_score))`,
      [id],
    );

    return totalWins;
  }

  public async countLosses(id: string): Promise<any> {
    const totalLosses = await this.query(
      `SELECT COUNT(m.id) FROM match m, team t WHERE t.id = $1 AND ((t.id = m.home AND home_score < away_score) OR (t.id = m.away AND away_score < home_score))`,
      [id],
    );

    return totalLosses;
  }

  public async countMatches(id: string): Promise<any> {
    return await this.query(
      `SELECT COUNT(m.id) FROM match m WHERE m.home = $1 OR m.away = $1`,
      [id],
    );
  }

  public async updateMatch(
    match: Match,
    updateMatchDto: UpdateMatchDto,
  ): Promise<Match> {
    return await this.save({ ...match, ...updateMatchDto });
  }

  public async deleteMatch(match: Match): Promise<Match> {
    return await this.remove(match);
  }
}
