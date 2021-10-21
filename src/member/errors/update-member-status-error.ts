import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdateMemberStatusError extends LeagueError {
  constructor(error?: any) {
    super(
      'UpdateMemberStatusError',
      ErrorCode.updateMemberStatusError,
      ErrorCategories.Member,
      'There has been a problem while updating the member status',
      error,
    );
  }
}
