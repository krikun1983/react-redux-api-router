import { ApiItem } from '../../types/form-api';
import {
  SearchCategoryRadioValueAction,
  SearchCategoryRadioValueActionTypes,
  SearchCategoryRadioValueState,
} from '../types/searchCategoryRadioValue';

const initialState: SearchCategoryRadioValueState = {
  searchCategoryRadioValue: ApiItem.CHARACTER,
};

const searchCategoryRadioValueReducer = (
  state = initialState,
  action: SearchCategoryRadioValueAction,
): SearchCategoryRadioValueState => {
  switch (action.type) {
    case SearchCategoryRadioValueActionTypes.API_CATEGORY_CHARACTER:
      return { ...state, searchCategoryRadioValue: ApiItem.CHARACTER };
    case SearchCategoryRadioValueActionTypes.API_CATEGORY_LOCATION:
      return { ...state, searchCategoryRadioValue: ApiItem.LOCATION };
    case SearchCategoryRadioValueActionTypes.API_CATEGORY_EPISODE:
      return { ...state, searchCategoryRadioValue: ApiItem.EPISODE };
    default:
      return state;
  }
};

export default searchCategoryRadioValueReducer;
