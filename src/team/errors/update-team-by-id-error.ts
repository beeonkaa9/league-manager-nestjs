import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class UpdateTeamByIdError extends LeagueError {
  constructor(error: any) {
    super(
      'UpdateTeamByIdError',
      ErrorCode.updateTeamByIdError,
      ErrorCategories.Team,
      'An error occurred while updating the team by id',
      error,
    );
  }
}
