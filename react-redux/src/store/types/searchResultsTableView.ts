export interface SearchResultsTableViewState {
  isSearchResultsTableView: boolean;
}

export interface SearchResultsTableViewAction {
  type: string;
  payload: boolean | undefined;
}
