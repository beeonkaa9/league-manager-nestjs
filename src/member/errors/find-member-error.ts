import { LeagueError } from '../../core/errors/league-error';
import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';

export class FindMemberError extends LeagueError {
  constructor(error?: any) {
    super(
      'FindMemberError',
      ErrorCode.findMemberError,
      ErrorCategories.Member,
      'There has been a problem while finding a member',
      error,
    );
  }
}
