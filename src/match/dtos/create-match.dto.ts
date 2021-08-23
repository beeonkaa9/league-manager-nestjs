import { Timestamp } from 'typeorm';

export class CreateMatchDto {
  id: string;
  home: string;
  away: string;
  home_score: number;
  away_score: number;
  played: Timestamp;
  location: string;
}
