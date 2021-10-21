import { ErrorCode } from './index';
import { LeagueError } from '../../core/errors/league-error';
import { ErrorCategories } from '../../core/errors/error-categories';

export class MemberDtoNotConvertedError extends LeagueError {
  constructor(error?: any) {
    super(
      'MemberDtoNotConvertedError',
      ErrorCode.memberDtoNotConvertedError,
      ErrorCategories.Member,
      'The member dto was not able to be converted to entity',
      error,
    );
  }
}
