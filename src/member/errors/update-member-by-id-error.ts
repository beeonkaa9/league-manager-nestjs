import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdateMemberByIdError extends LeagueError {
  constructor(error?: any) {
    super(
      'UpdateMemberByIdError',
      ErrorCode.updateMemberByIdError,
      ErrorCategories.Member,
      'There has been a problem while updating the member',
      error,
    );
  }
}
