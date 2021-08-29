import { createAction, createReducer } from '@reduxjs/toolkit';
import { ApiItem } from '../../types/form-api';
import { SearchCategoryRadioValueState } from '../types/searchCategoryRadioValue';

const initialState: SearchCategoryRadioValueState = {
  searchCategoryRadioValue: ApiItem.CHARACTER,
};

export const searchCategoryCharacterAction = createAction('searchCategoryCharacterAction');
export const searchCategoryLocationAction = createAction('searchCategoryLocationAction');
export const searchCategoryEpisodeAction = createAction('searchCategoryEpisodeAction');

const searchCategoryRadioValueReducer = createReducer(initialState, builder => {
  builder
    .addCase(searchCategoryCharacterAction, state => {
      state.searchCategoryRadioValue = ApiItem.CHARACTER;
    })
    .addCase(searchCategoryLocationAction, state => {
      state.searchCategoryRadioValue = ApiItem.LOCATION;
    })
    .addCase(searchCategoryEpisodeAction, state => {
      state.searchCategoryRadioValue = ApiItem.EPISODE;
    });
});

export default searchCategoryRadioValueReducer;
