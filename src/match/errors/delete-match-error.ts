import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class DeleteMatchError extends LeagueError {
  constructor(error: any) {
    super(
      'DeleteMatchError',
      ErrorCode.deleteMatchError,
      ErrorCategories.Match,
      'An error occurred while deleting the match',
      error,
    );
  }
}
