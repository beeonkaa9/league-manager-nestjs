import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindTeamByIdError extends LeagueError {
  constructor(error: any) {
    super(
      'FindTeamByIdError',
      ErrorCode.findTeamByIdError,
      ErrorCategories.Team,
      'An error occurred while searching for the team by id',
      error,
    );
  }
}
