import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdateTeamStatusError extends LeagueError {
  constructor(error: any) {
    super(
      'UpdateTeamStatusError',
      ErrorCode.updateTeamStatusError,
      ErrorCategories.Team,
      'Updates to team status failed to save to the database',
      error,
    );
  }
}
