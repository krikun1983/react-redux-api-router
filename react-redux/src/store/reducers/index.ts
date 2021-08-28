import { combineReducers } from 'redux';
import currentPageReducer from './currentPage';
import searchCategoryRadioValueReducer from './searchCategoryRadioValueReducer';
import searchResultsTableViewReducer from './searchResultsTableViewReducer';

const rootReducer = combineReducers({
  searchCategoryRadioValue: searchCategoryRadioValueReducer,
  isSearchResultsTableView: searchResultsTableViewReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
