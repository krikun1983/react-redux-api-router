export interface SearchFieldNameErrorState {
  isSearchFieldNameError: boolean;
}

export interface SearchFieldNameErrorAction {
  type: string;
  payload: boolean | undefined;
}
