import { createAction, createReducer } from '@reduxjs/toolkit';
import { SearchResultsTableViewState } from '../types/searchResultsTableView';

const initialState: SearchResultsTableViewState = {
  isSearchResultsTableView: false,
};

export const SearchResultsTableShow = createAction('SearchResultsTableShow');
export const SearchResultsTableClose = createAction('SearchResultsTableClose');

const searchResultsTableViewReducer = createReducer(initialState, builder => {
  builder
    .addCase(SearchResultsTableShow, (state, action) => {
      state.isSearchResultsTableView = !action.payload;
    })
    .addCase(SearchResultsTableClose, state => {
      state.isSearchResultsTableView = false;
    });
});

export default searchResultsTableViewReducer;
