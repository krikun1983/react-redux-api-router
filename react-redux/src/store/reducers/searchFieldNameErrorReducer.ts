import {
  SearchFieldNameErrorState,
  SearchFieldNameErrorAction,
  SearchFieldNameErrorTypes,
} from '../types/searchFieldNameError';

const initialState: SearchFieldNameErrorState = {
  isSearchFieldNameError: false,
};

const searchFieldNameErrorReducer = (
  state = initialState,
  action: SearchFieldNameErrorAction,
): SearchFieldNameErrorState => {
  switch (action.type) {
    case SearchFieldNameErrorTypes.SUCCESS:
      return { ...state, isSearchFieldNameError: false };
    case SearchFieldNameErrorTypes.NOT_SUCCESS:
      return { ...state, isSearchFieldNameError: true };
    default:
      return state;
  }
};

export default searchFieldNameErrorReducer;
