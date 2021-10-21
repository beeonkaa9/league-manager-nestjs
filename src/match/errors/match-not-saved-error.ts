import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MatchNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MatchNotSavedError',
      ErrorCode.matchNotSavedError,
      ErrorCategories.Match,
      'The match failed to save to the database',
      error,
    );
  }
}
