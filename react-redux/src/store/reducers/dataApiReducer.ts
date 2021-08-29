import { DataApiAction, DataApiActionTypes, DataApiState } from '../types/dataApi';

const initialState: DataApiState = {
  dataApi: null,
};

const dataApiReducer = (state = initialState, action: DataApiAction): DataApiState => {
  switch (action.type) {
    case DataApiActionTypes.LOADING:
      return { ...state, dataApi: action.payload };
    default:
      return state;
  }
};

export default dataApiReducer;
