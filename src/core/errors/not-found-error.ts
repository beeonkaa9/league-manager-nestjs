import { LeagueError } from './league-error';

export class NotFoundError extends LeagueError {
  constructor(
    name: string,
    code: string,
    category: string,
    message: string,
    error: any,
  ) {
    super(name, code, category, message, error);
  }
}
