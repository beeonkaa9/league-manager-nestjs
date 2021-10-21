import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MemberDeleteFailedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MemberDeleteFailedError',
      ErrorCode.memberDeleteFailedError,
      ErrorCategories.Member,
      'Member failed to be deleted from the database',
      error,
    );
  }
}
