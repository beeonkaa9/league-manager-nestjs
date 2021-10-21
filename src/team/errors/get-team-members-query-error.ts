import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class GetTeamMembersQueryError extends LeagueError {
  constructor(error?: any) {
    super(
      'GetTeamMembersQueryError',
      ErrorCode.getTeamMembersQueryError,
      ErrorCategories.Team,
      'The query for finding team members failed to execute',
      error,
    );
  }
}
