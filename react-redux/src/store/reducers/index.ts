import { combineReducers } from 'redux';
import searchCategoryRadioValueReducer from './searchCategoryRadioValueReducer';
import searchResultsTableViewReducer from './searchResultsTableViewReducer';

const rootReducer = combineReducers({
  searchCategoryRadioValue: searchCategoryRadioValueReducer,
  isSearchResultsTableView: searchResultsTableViewReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
