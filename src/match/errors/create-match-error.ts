import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class CreateMatchError extends LeagueError {
  constructor(error: any) {
    super(
      'CreateMatchError',
      ErrorCode.createMatchError,
      ErrorCategories.Match,
      'An error occurred while creating the match',
      error,
    );
  }
}
