import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class DeleteMemberError extends LeagueError {
  constructor(error?: any) {
    super(
      'DeleteMemberError',
      ErrorCode.deleteMemberError,
      ErrorCategories.Member,
      'An error occurred while deleting the member',
      error,
    );
  }
}
