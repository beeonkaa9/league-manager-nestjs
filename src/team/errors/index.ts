export * from './team-dto-not-mapped-error';
export * from './team-not-saved-error';
export * from './create-team-error';
export * from './team-id-not-found-error';
export * from './find-team-by-id-error';
export * from './find-team-matches-query-error';
export * from './find-team-matches-error';
export * from './team-member-invalid-input-error';
export * from './get-team-members-query-error';
export * from './find-team-members-error';
export * from './team-stats-query-error';
export * from './get-team-stats-error';
export * from './updated-team-not-saved-error';
export * from './update-team-by-id-error';
export * from './updated-team-status-not-saved-error';
export * from './update-team-status-error';
export * from './team-not-deleted-error';
export * from './remove-team-error';

export enum ErrorCode {
  teamDtoNotMappedError = 'TEAM_DTO_NOT_MAPPED_ERROR',
  teamNotSavedError = 'TEAM_NOT_SAVED_ERROR',
  createTeamError = 'CREATE_TEAM_ERROR',
  teamIdNotFoundError = 'TEAM_ID_NOT_FOUND_ERROR',
  findTeamByIdError = 'FIND_TEAM_BY_ID_ERROR',
  findTeamMatchesQueryError = 'FIND_TEAM_MATCHES_QUERY_ERROR',
  findTeamMatchesError = 'FIND_TEAM_MATCHES_ERROR',
  teamMemberInvalidInputError = 'TEAM_MEMBER_INVALID_INPUT_ERROR',
  getTeamMembersQueryError = 'GET_TEAM_MEMBERS_QUERY_ERROR',
  findTeamMembersError = 'FIND_TEAM_MEMBERS_ERROR',
  teamStatsQueryError = 'TEAM_STATS_QUERY_ERROR',
  getTeamStatsError = 'GET_TEAM_STATS_ERROR',
  updatedTeamNotSavedError = 'UPDATED_TEAM_NOT_SAVED_ERROR',
  updateTeamByIdError = 'UPDATE_TEAM_BY_ID_ERROR',
  updatedTeamStatusNotSavedError = 'UPDATED_TEAM_STATUS_NOT_SAVED_ERROR',
  updateTeamStatusError = 'UPDATE_TEAM_STATUS_ERROR',
  teamNotDeletedError = 'TEAM_NOT_DELETED_ERROR',
  removeTeamError = 'REMOVE_TEAM_ERROR',
}
