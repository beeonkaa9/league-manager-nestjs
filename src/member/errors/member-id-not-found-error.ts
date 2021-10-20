import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { NotFoundError } from '../../core/errors/not-found-error';

export class MemberIdNotFoundError extends NotFoundError {
  constructor(id: string, error?: any) {
    super(
      'MemberIdNotFoundError',
      ErrorCode.memberIdNotFoundError,
      ErrorCategories.Member,
      `Member id ${id} was not found in the table`,
      error,
    );
  }
}
