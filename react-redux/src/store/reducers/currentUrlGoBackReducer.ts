import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentUrl: '',
};

export const currentUrlAction = createAction('currentUrlAction', (url: string) => {
  return {
    payload: url,
  };
});

const currentUrlGoBackReducer = createReducer(initialState, builder => {
  builder.addCase(currentUrlAction, (state, action) => {
    state.currentUrl = action.payload;
  });
});

export default currentUrlGoBackReducer;
