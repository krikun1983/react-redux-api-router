import { createAction, createReducer } from '@reduxjs/toolkit';
import { CurrentPageState } from '../types/currentPage';

const initialState: CurrentPageState = {
  currentPage: 1,
  prevPage: '',
  nextPage: '',
};

export const currentPageAction = createAction('currentPageAction', (num: number) => {
  return {
    payload: num,
  };
});
export const currentPageNextAction = createAction('currentPageNextAction', (str: string | null) => {
  return {
    payload: str,
  };
});
export const currentPagePrevAction = createAction('currentPagePrevAction', (str: string | null) => {
  return {
    payload: str,
  };
});

const currentPageReducer = createReducer(initialState, builder => {
  builder
    .addCase(currentPageAction, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(currentPageNextAction, (state, action) => {
      state.nextPage = action.payload;
    })
    .addCase(currentPagePrevAction, (state, action) => {
      state.prevPage = action.payload;
    });
});

export default currentPageReducer;
