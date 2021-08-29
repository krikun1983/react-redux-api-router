import { combineReducers } from '@reduxjs/toolkit';
import currentPageReducer from './currentPageReducer';
import dataApiReducer from './dataApiReducer';
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
  dataApi: dataApiReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
