import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class MatchNotMappedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MatchNotMappedError',
      ErrorCode.matchNotMappedError,
      ErrorCategories.Match,
      'The match JSON failed to convert to an entity',
      error,
    );
  }
}
