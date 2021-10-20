export class LeagueError {
  public code: string;
  public category: string;
  public name: string;
  private message: string;
  get getMessage(): string {
    return this.message;
  }
  private error: Error;
  get getError(): Error {
    return this.error;
  }
  constructor(
    name: string,
    code: string,
    category: string,
    message: string,
    error: Error,
  ) {
    this.name = name;
    this.code = code;
    this.category = category;
    this.message = message;
    this.error = error;
  }
}
