import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdateMatchError extends LeagueError {
  constructor(error: any) {
    super(
      'UpdateMatchError',
      ErrorCode.updateMatchError,
      ErrorCategories.Match,
      'An error occurred while updating the match',
      error,
    );
  }
}
