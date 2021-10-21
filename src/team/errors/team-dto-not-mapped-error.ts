import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';

export class TeamDtoNotMappedError extends LeagueError {
  constructor(error?: any) {
    super(
      'TeamDtoNotMappedError',
      ErrorCode.teamDtoNotMappedError,
      ErrorCategories.Team,
      'The input JSON failed to map to entity',
      error,
    );
  }
}
