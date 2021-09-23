import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMatchDto } from './dtos/create-match.dto';
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
      return e;
    }
  }

  /*
      GET /match/{id}
      Find a match by id
    
  async findMatch(id: string) {
    return 'finds a match';
  }

  /*
      PATCH /{id}
      Updates a match
    
  async updateMatch(id: string, body: string) {
    return 'updates a match';
  }

  /*
      Delete /match/{id}
      Deletes a match
    
  async deleteMatch(id: string) {
    return 'deletes a match';
  }
  */
}
