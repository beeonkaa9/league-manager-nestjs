import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MatchNotDeletedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MatchNotDeletedError',
      ErrorCode.matchNotDeletedError,
      ErrorCategories.Match,
      'The match failed to delete from the database',
      error,
    );
  }
}
