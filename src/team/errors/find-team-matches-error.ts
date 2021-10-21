import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindTeamMatchesError extends LeagueError {
  constructor(error?: any) {
    super(
      'FindTeamMatchesError',
      ErrorCode.findTeamMatchesError,
      ErrorCategories.Team,
      'There was an error while finding matches for the team',
      error,
    );
  }
}
