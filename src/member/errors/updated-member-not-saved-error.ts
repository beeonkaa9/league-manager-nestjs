import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdatedMemberNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'UpdatedMemberNotSavedError',
      ErrorCode.updatedMemberNotSavedError,
      ErrorCategories.Member,
      'Updated member failed to save to the database',
      error,
    );
  }
}
