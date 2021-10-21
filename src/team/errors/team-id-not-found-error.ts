import { ErrorCategories } from '../../core/errors/error-categories';
import { ErrorCode } from './index';
import { NotFoundError } from '../../core/errors/not-found-error';

export class TeamIdNotFoundError extends NotFoundError {
  constructor(id: string, error?: any) {
    super(
      'TeamIdNotFoundError',
      ErrorCode.teamIdNotFoundError,
      ErrorCategories.Team,
      `Team id ${id} was not found in the table`,
      error,
    );
  }
}
