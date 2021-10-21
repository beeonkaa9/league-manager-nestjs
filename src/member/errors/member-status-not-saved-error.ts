import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';
export class MemberStatusNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MemberStatusNotSavedError',
      ErrorCode.memberStatusNotSavedError,
      ErrorCategories.Member,
      'Updated member status failed to save to the database',
      error,
    );
  }
}
