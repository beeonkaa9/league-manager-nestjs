import { Timestamp } from 'typeorm';

export class Match {
  id: string;
  home: string;
  away: string;
  home_score: number;
  away_score: number;
  played: Timestamp;
  location: string;
}

//TODO: location needs to be enum
