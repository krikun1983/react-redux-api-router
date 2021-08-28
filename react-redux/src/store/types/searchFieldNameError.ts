export interface SearchFieldNameErrorState {
  isSearchFieldNameError: boolean;
}

export interface SearchFieldNameErrorAction {
  type: string;
  payload: boolean;
}

export enum SearchFieldNameErrorTypes {
  SUCCESS = 'SUCCESS',
  NOT_SUCCESS = 'NOT_SUCCESS',
}
