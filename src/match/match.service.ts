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

  /**
   * Creates a match
   * @param {CreateMatchDto} createMatchDto
   * @returns {Promise <Match | Error>}
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

  /**
   * Find a match by id
   * @param {string} id
   * @returns {Promise <Match>}
   */
  async findMatchById(id: string): Promise<Match> {
    return await this.matchRepository.findMatchById(id);
  }

  /**
   * Updates a match
   * @param {string} id
   * @param {UpdateMatchDto} updateMatchDto
   * @returns {Promise<Match | Error>}
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

  /**
   * Deletes a match
   * @param {string} id
   * @returns {Promise<Match | Error>}
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
