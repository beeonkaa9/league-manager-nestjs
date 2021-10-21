import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { NotFoundError } from '../../core/errors/not-found-error';

export class MatchNotFoundError extends NotFoundError {
  constructor(id: string, error?: any) {
    super(
      'MatchNotFoundError',
      ErrorCode.matchNotFoundError,
      ErrorCategories.Match,
      `Match id ${id} was not found in the table`,
      error,
    );
  }
}
