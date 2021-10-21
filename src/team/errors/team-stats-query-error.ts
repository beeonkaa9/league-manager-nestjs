import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class TeamStatsQueryError extends LeagueError {
  constructor(message: string, error?: any) {
    super(
      'TeamStatsQueryError',
      ErrorCode.teamStatsQueryError,
      ErrorCategories.Team,
      message,
      error,
    );
  }
}
