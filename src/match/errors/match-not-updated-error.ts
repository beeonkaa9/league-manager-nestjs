import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MatchNotUpdatedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MatchNotUpdatedError',
      ErrorCode.matchNotUpdatedError,
      ErrorCategories.Match,
      'The updates to the match failed to save to the database',
      error,
    );
  }
}
