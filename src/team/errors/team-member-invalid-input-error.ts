import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class TeamMemberInvalidInputError extends LeagueError {
  constructor(message: string, error?: any) {
    super(
      'TeamMemberInvalidInputError',
      ErrorCode.teamMemberInvalidInputError,
      ErrorCategories.Team,
      message,
      error,
    );
  }
}
