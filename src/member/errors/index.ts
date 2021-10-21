export * from './member-not-saved-error';
export * from './member-dto-not-converted-error';
export * from './member-create-error';
export * from './free-agents-not-found-error';
export * from './free-agents-error';
export * from './member-id-not-found-error';
export * from './find-member-error';
export * from './updated-member-not-saved-error';
export * from './update-member-by-id-error';
export * from './member-status-not-saved-error';
export * from './update-member-status-error';
export * from './member-delete-failed-error';
export * from './delete-member-error';

export enum ErrorCode {
  memberNotSavedError = 'MEMBER_NOT_SAVED_ERROR',
  memberDtoNotConvertedError = 'MEMBER_DTO_NOT_CONVERTED_ERROR',
  memberCreateError = 'MEMBER_CREATE_ERROR',
  freeAgentsNotFoundError = 'FREE_AGENTS_NOT_FOUND_ERROR',
  freeAgentsError = 'FREE_AGENTS_ERROR',
  memberIdNotFoundError = 'MEMBER_ID_NOT_FOUND_ERROR',
  findMemberError = 'FIND_MEMBER_ERROR',
  updatedMemberNotSavedError = 'UPDATED_MEMBER_NOT_SAVED_ERROR',
  updateMemberByIdError = 'UPDATE_MEMBER_BY_ID_ERROR',
  memberStatusNotSavedError = 'MEMBER_STATUS_NOT_SAVED_ERROR',
  updateMemberStatusError = 'UPDATE_MEMBER_STATUS_ERROR',
  memberDeleteFailedError = 'MEMBER_DELETE_FAILED_ERROR',
  deleteMemberError = 'DELETE_MEMBER_ERROR',
}
