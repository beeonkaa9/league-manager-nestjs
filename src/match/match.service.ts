import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeagueError } from '../core/errors/league-error';
import { CreateMatchDto } from './dtos/create-match.dto';
import { UpdateMatchDto } from './dtos/update-match.dto';
import {
  CreateMatchError,
  FindMatchByIdError,
  MatchingTeamsError,
  MatchNotDeletedError,
  MatchNotFoundError,
  MatchNotMappedError,
  MatchNotSavedError,
  MatchNotUpdatedError,
  UpdateMatchError,
} from './errors';
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
   * @returns {Promise <Match | LeagueError>}
   */
  async createMatch(
    createMatchDto: CreateMatchDto,
  ): Promise<Match | LeagueError> {
    try {
      //ensures that a team cannot play against itself
      if (createMatchDto.home == createMatchDto.away) {
        throw new MatchingTeamsError();
      }
      const match = MatchMapper.toDomain(createMatchDto);
      if (!match) {
        throw new MatchNotMappedError();
      }

      //save to database
      const newMatch = await this.matchRepository.createMatch(match);
      if (!newMatch) {
        throw new MatchNotSavedError();
      }
      return newMatch;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new CreateMatchError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * Find a match by id
   * @param {string} id
   * @returns {Promise <Match | LeagueError>}
   */
  async findMatchById(id: string): Promise<Match | LeagueError> {
    try {
      const match = await this.matchRepository.findMatchById(id);
      if (!match) {
        throw new MatchNotFoundError(id);
      }
      return match;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new FindMatchByIdError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * Updates a match
   * @param {string} id
   * @param {UpdateMatchDto} updateMatchDto
   * @returns {Promise<Match | LeagueError>}
   */
  async updateMatch(
    id: string,
    updateMatchDto: UpdateMatchDto,
  ): Promise<Match | LeagueError> {
    try {
      //search for match to make sure it exists
      const match: Match = await this.matchRepository.findMatchById(id);
      if (!match) {
        throw new MatchNotFoundError(id);
      }

      //update the match
      const updatedMatch = await this.matchRepository.updateMatch(
        match,
        updateMatchDto,
      );
      if (!updatedMatch) {
        throw new MatchNotUpdatedError();
      }
      return updatedMatch;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return new UpdateMatchError(`${e.name}: ${e.message}`);
    }
  }

  /**
   * Deletes a match
   * @param {string} id
   * @returns {Promise<Match | LeagueError>}
   */
  async deleteMatch(id: string): Promise<Match | LeagueError> {
    try {
      //search for match to make sure it exists
      const match: Match = await this.matchRepository.findMatchById(id);
      if (!match) {
        throw new MatchNotFoundError(id);
      }

      //delete the match
      const deletedMatch = await this.matchRepository.deleteMatch(match);
      if (!deletedMatch) {
        throw new MatchNotDeletedError();
      }
      return deletedMatch;
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      console.trace();
      return e;
    }
  }
}
