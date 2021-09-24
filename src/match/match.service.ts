import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMatchDto } from './dtos/create-match.dto';
import { UpdateMatchDto } from './dtos/update-match.dto';
import { MatchMapper } from './mappers/match.map';
import { Match } from './models/match.entity';
import { MatchRepository } from './repositories/match.repository';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchRepository) private matchRepository: MatchRepository,
  ) {}
  /*
    POST /match
    Create a match
  */
  async createMatch(createMatchDto: CreateMatchDto): Promise<Match | Error> {
    try {
      const match = MatchMapper.toDomain(createMatchDto);
      return await this.matchRepository.createMatch(match);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
      GET /match/{id}
      Find a match by id
  */
  async findMatchById(id: string): Promise<Match | Error> {
    try {
      return await this.matchRepository.findMatchById(id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
      PATCH /{id}
      Updates a match
  */
  async updateMatch(
    id: string,
    updateMatchDto: UpdateMatchDto,
  ): Promise<Match | Error> {
    const match: Match = await this.matchRepository.findMatchById(id);
    try {
      return await this.matchRepository.updateMatch(match, updateMatchDto);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  /*
      Delete /match/{id}
      Deletes a match
 */
  async deleteMatch(id: string): Promise<Match | Error> {
    const match: Match = await this.matchRepository.findMatchById(id);
    try {
      return await this.matchRepository.deleteMatch(match);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
