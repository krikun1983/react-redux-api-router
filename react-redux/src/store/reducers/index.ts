import { combineReducers } from 'redux';
import searchCategoryRadioValueReducer from './searchCategoryRadioValueReducer';

const rootReducer = combineReducers({
  searchCategoryRadioValue: searchCategoryRadioValueReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
