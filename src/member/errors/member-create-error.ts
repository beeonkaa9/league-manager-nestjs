import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MemberCreateError extends LeagueError {
  constructor(error?: any) {
    super(
      'MemberCreateError',
      ErrorCode.memberCreateError,
      ErrorCategories.Member,
      'There has been a problem while creating a new member',
      error,
    );
  }
}
