import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isSearchResultsTableView: false,
};

export const searchResultsTableShow = createAction('SearchResultsTableShow');
export const searchResultsTableClose = createAction('SearchResultsTableClose');

const searchResultsTableViewReducer = createReducer(initialState, builder => {
  builder
    .addCase(searchResultsTableShow, state => {
      state.isSearchResultsTableView = true;
    })
    .addCase(searchResultsTableClose, state => {
      state.isSearchResultsTableView = false;
    });
});

export default searchResultsTableViewReducer;
