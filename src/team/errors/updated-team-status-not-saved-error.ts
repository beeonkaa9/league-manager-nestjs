import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdatedTeamStatusNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'UpdatedTeamStatusNotSavedError',
      ErrorCode.updateTeamByIdError,
      ErrorCategories.Team,
      'Updates to team status failed to save to the database',
      error,
    );
  }
}
