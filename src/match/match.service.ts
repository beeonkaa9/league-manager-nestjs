import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dtos/create-match.dto';
import { Match } from './models/match.entity';

@Injectable()
export class MatchService {
  private readonly matches: Match[] = [];

  /*
    POST /match
    Create a match
  */
  createMatch(createMatchDto: CreateMatchDto) {
    return 'creates a new match';
  }

  /*
      GET /match/{id}
      Find a match by id
    */
  findMatch(id: string) {
    return 'finds a match';
  }

  /*
      PATCH /{id}
      Updates a match
    */
  updateMatch(id: string, body: string) {
    return 'updates a match';
  }

  /*
      Delete /match/{id}
      Deletes a match
    */
  deleteMatch(id: string) {
    return 'deletes a match';
  }
}
