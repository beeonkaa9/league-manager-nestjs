import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class RemoveTeamError extends LeagueError {
  constructor(error: any) {
    super(
      'RemoveTeamError',
      ErrorCode.teamNotDeletedError,
      ErrorCategories.Team,
      'An error occurred while deleting the team',
      error,
    );
  }
}
