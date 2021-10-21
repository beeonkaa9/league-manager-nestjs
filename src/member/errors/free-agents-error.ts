import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class FreeAgentsError extends LeagueError {
  constructor(error?: any) {
    super(
      'FreeAgentsError',
      ErrorCode.freeAgentsError,
      ErrorCategories.Member,
      'There has been a problem while finding free agents',
      error,
    );
  }
}
