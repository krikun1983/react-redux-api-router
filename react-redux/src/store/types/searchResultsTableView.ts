export interface SearchResultsTableViewState {
  isSearchResultsTableView: boolean;
}

export interface SearchResultsTableViewAction {
  type: string;
  payload: boolean;
}

export enum SearchResultsTableViewActionTypes {
  SHOW = 'SHOW',
  CLOSE = 'CLOSE',
}
