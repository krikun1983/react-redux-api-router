import {
  SearchResultsTableViewAction,
  SearchResultsTableViewActionTypes,
  SearchResultsTableViewState,
} from '../types/searchResultsTableView';

const initialState: SearchResultsTableViewState = {
  isSearchResultsTableView: false,
};

const searchResultsTableViewReducer = (
  state = initialState,
  action: SearchResultsTableViewAction,
): SearchResultsTableViewState => {
  switch (action.type) {
    case SearchResultsTableViewActionTypes.SHOW:
      return { ...state, isSearchResultsTableView: true };
    case SearchResultsTableViewActionTypes.CLOSE:
      return { ...state, isSearchResultsTableView: false };
    default:
      return state;
  }
};

export default searchResultsTableViewReducer;
