import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindTeamMatchesQueryError extends LeagueError {
  constructor(error?: any) {
    super(
      'FindTeamMatchesQueryError',
      ErrorCode.findTeamMatchesQueryError,
      ErrorCategories.Team,
      'Query for finding matches for team failed to execute',
      error,
    );
  }
}
