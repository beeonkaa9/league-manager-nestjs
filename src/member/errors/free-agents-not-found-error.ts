import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { NotFoundError } from '../../core/errors/not-found-error';

export class FreeAgentsNotFoundError extends NotFoundError {
  constructor(error?: any) {
    super(
      'FreeAgentsNotFoundError',
      ErrorCode.freeAgentsNotFoundError,
      ErrorCategories.Member,
      'No free agents were found',
      error,
    );
  }
}
