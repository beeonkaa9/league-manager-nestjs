import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class CreateTeamError extends LeagueError {
  constructor(error: any) {
    super(
      'CreateTeamError',
      ErrorCode.createTeamError,
      ErrorCategories.Team,
      'An error occurred while creating the team',
      error,
    );
  }
}
