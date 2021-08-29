import { createAction, createReducer } from '@reduxjs/toolkit';
import { DetailsPageState } from '../types/detailsPage';
import { Res } from '../../types/details';

const initialState: DetailsPageState = {
  detailsPhoto: '',
  detailsTitle: '',
  detailsInfo: [],
};

export const detailsPhotoPageAction = createAction('detailsPhotoPageAction', (str: string) => {
  return {
    payload: str,
  };
});
export const detailsTitlePageAction = createAction('detailsTitlePageAction', (str: string) => {
  return {
    payload: str,
  };
});
export const detailsInfoPageAction = createAction('detailsInfoPageAction', (data: Res[]) => {
  return {
    payload: data,
  };
});

const detailsPageReducer = createReducer(initialState, builder => {
  builder
    .addCase(detailsPhotoPageAction, (state, action) => {
      state.detailsPhoto = action.payload;
    })
    .addCase(detailsTitlePageAction, (state, action) => {
      state.detailsTitle = action.payload;
    })
    .addCase(detailsInfoPageAction, (state, action) => {
      state.detailsInfo = action.payload;
    });
});

export default detailsPageReducer;
