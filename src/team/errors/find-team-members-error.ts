import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FindTeamMembersError extends LeagueError {
  constructor(error: any) {
    super(
      'FindTeamMembersError',
      ErrorCode.findTeamMembersError,
      ErrorCategories.Team,
      'An error occurred when finding team members',
      error,
    );
  }
}
