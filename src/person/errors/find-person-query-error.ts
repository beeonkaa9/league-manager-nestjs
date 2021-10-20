import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindPersonQueryError extends LeagueError {
  constructor(error: any) {
    super(
      'FindPersonQueryError',
      ErrorCode.findPersonQueryError,
      ErrorCategories.Person,
      `An error occurred while running the query for finding person by id`,
      error,
    );
  }
}
