import { CurrentPageState, CurrentPageAction, CurrentPageActionType } from '../types/currentPage';

const initialState: CurrentPageState = {
  currentPage: 1,
  prevPage: '',
  nextPage: '',
};

const currentPageReducer = (state = initialState, action: CurrentPageAction): CurrentPageState => {
  switch (action.type) {
    case CurrentPageActionType.PREV:
      return { ...state, prevPage: action.payload };
    case CurrentPageActionType.NEXT:
      return { ...state, nextPage: action.payload };
    case CurrentPageActionType.CURRENT:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default currentPageReducer;
