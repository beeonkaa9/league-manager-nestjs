export * from './matching-teams-error';
export * from './match-not-mapped-error';
export * from './match-not-saved-error';
export * from './create-match-error';
export * from './match-not-found-error';
export * from './find-match-by-id-error';
export * from './match-not-updated-error';
export * from './update-match-error';
export * from './match-not-deleted-error';
export * from './delete-match-error';

export enum ErrorCode {
  matchingTeamsError = 'MATCHING_TEAMS_ERROR',
  matchNotMappedError = 'MATCH_NOT_MAPPED_ERROR',
  matchNotSavedError = 'MATCH_NOT_SAVED_ERROR',
  createMatchError = 'CREATE_MATCH_ERROR',
  matchNotFoundError = 'MATCH_NOT_FOUND_ERROR',
  findMatchByIdError = 'FIND_MATCH_BY_ID_ERROR',
  matchNotUpdatedError = 'MATCH_NOT_UPDATED_ERROR',
  updateMatchError = 'UPDATE_MATCH_ERROR',
  matchNotDeletedError = 'MATCH_NOT_DELETED_ERROR',
  deleteMatchError = 'DELETE_MATCH_ERROR',
}
