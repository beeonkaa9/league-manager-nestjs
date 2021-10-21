import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class GetTeamStatsError extends LeagueError {
  constructor(error: any) {
    super(
      'GetTeamStatsError',
      ErrorCode.getTeamStatsError,
      ErrorCategories.Team,
      'An error occurred when getting the team stats',
      error,
    );
  }
}
