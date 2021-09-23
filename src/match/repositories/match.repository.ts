import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Match } from '../models/match.entity';

export interface IMatchRepository {
  createMatch(match: Match): Promise<Match>;
  findMatchById(id: string): Promise<Match>;
  //   updateMatch(match: Match, updateMatchDto: UpdateMatchDto): Promise<Match>;
  //   deleteMatch(match: Match): Promise<Match>;
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
}
