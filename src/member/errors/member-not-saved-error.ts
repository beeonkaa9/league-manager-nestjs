import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MemberNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MemberNotSavedError',
      ErrorCode.memberNotSavedError,
      ErrorCategories.Member,
      'Member was not saved to the database',
      error,
    );
  }
}
