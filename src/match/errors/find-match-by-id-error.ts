import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindMatchByIdError extends LeagueError {
  constructor(error: any) {
    super(
      'FindMatchByIdError',
      ErrorCode.findMatchByIdError,
      ErrorCategories.Match,
      'An error has occurred while searching for the match by id',
      error,
    );
  }
}
