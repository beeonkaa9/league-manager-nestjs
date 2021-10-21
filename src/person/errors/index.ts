export * from './person-id-not-found-error';
export * from './find-person-by-id-error';
export * from './find-person-query-error';

export enum ErrorCode {
  personIdNotFoundError = 'PERSON_ID_NOT_FOUND_ERROR',
  findPersonQueryError = 'FIND_PERSON_QUERY_ERROR',
  findPersonByIdError = 'FIND_PERSON_BY_ID_ERROR',
}
