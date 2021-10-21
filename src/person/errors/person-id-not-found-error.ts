import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { NotFoundError } from '../../core/errors/not-found-error';

export class PersonIdNotFoundError extends NotFoundError {
  constructor(id: string, error?: any) {
    super(
      'PersonIdNotFoundError',
      ErrorCode.personIdNotFoundError,
      ErrorCategories.Person,
      `Person id ${id} was not found in the table`,
      error,
    );
  }
}
