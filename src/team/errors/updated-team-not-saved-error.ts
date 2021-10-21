import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdatedTeamNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'UpdatedTeamNotSavedError',
      ErrorCode.updatedTeamNotSavedError,
      ErrorCategories.Team,
      'The updates to the team were not able to be saved to the database',
      error,
    );
  }
}
