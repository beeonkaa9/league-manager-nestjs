import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class TeamNotSavedError extends LeagueError {
  constructor(error?: any) {
    super(
      'TeamNotSavedError',
      ErrorCode.teamNotSavedError,
      ErrorCategories.Team,
      'The team failed to save to the database',
      error,
    );
  }
}
