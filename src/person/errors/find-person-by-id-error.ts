import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindPersonByIdError extends LeagueError {
  constructor(error: any) {
    super(
      'FindPersonByIdError',
      ErrorCode.personIdNotFoundError,
      ErrorCategories.Person,
      `An error occurred while finding the person via id`,
      error,
    );
  }
}
