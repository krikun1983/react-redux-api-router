import { createAction, createReducer } from '@reduxjs/toolkit';
import { GetApiData } from '../../types/form-api';
import { DataApiState } from '../types/dataApi';

const initialState: DataApiState = {
  dataApi: null,
};

export const dataApiActionLoading = createAction('dataApiActionLoading', (data: GetApiData) => {
  return {
    payload: data,
  };
});
export const dataApiActionLoadingStop = createAction('dataApiActionLoadingStop');

const dataApiReducer = createReducer(initialState, builder => {
  builder
    .addCase(dataApiActionLoading, (state, action) => {
      state.dataApi = action.payload;
    })
    .addCase(dataApiActionLoadingStop, state => {
      state.dataApi = null;
    });
});
export default dataApiReducer;
