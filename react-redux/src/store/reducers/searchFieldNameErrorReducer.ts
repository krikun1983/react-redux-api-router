import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  isSearchFieldNameError: false,
};

export const searchFieldNameErrorSuccess = createAction('searchFieldNameErrorSuccess');
export const searchFieldNameErrorNotSuccess = createAction('searchFieldNameErrorNotSuccess');

const searchFieldNameErrorReducer = createReducer(initialState, builder => {
  builder
    .addCase(searchFieldNameErrorSuccess, state => {
      state.isSearchFieldNameError = false;
    })
    .addCase(searchFieldNameErrorNotSuccess, state => {
      state.isSearchFieldNameError = true;
    });
});

export default searchFieldNameErrorReducer;
