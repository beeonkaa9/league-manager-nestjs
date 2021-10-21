import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class TeamNotDeletedError extends LeagueError {
  constructor(error?: any) {
    super(
      'TeamNotDeletedError',
      ErrorCode.teamNotDeletedError,
      ErrorCategories.Team,
      'Team failed to delete from the database',
      error,
    );
  }
}
