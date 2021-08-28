import { combineReducers } from 'redux';
import currentPageReducer from './currentPageReducer';
import detailsPageReducer from './detailsPageReducer';
import searchCategoryRadioValueReducer from './searchCategoryRadioValueReducer';
import searchFieldNameErrorReducer from './searchFieldNameErrorReducer';
import searchResultsTableViewReducer from './searchResultsTableViewReducer';

const rootReducer = combineReducers({
  searchCategoryRadioValue: searchCategoryRadioValueReducer,
  isSearchResultsTableView: searchResultsTableViewReducer,
  currentPage: currentPageReducer,
  prevPage: currentPageReducer,
  nextPage: currentPageReducer,
  isSearchFieldNameError: searchFieldNameErrorReducer,
  detailsPhoto: detailsPageReducer,
  detailsTitle: detailsPageReducer,
  detailsInfo: detailsPageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
