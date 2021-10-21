import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MatchingTeamsError extends LeagueError {
  constructor(error?: any) {
    super(
      'MatchingTeamsError',
      ErrorCode.matchingTeamsError,
      ErrorCategories.Match,
      'The home team and away team must not be the same',
      error,
    );
  }
}
