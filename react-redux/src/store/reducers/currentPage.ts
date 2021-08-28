import { CurrentPageState, CurrentPageAction, CurrentPageActionType } from '../types/currentPage';

const initialState: CurrentPageState = {
  currentPage: 1,
};

const currentPageReducer = (state = initialState, action: CurrentPageAction): CurrentPageState => {
  switch (action.type) {
    case CurrentPageActionType.NEXT:
      return { ...state, currentPage: state.currentPage + action.payload };
    case CurrentPageActionType.PREV:
      return { ...state, currentPage: state.currentPage - action.payload };
    case CurrentPageActionType.CURRENT:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default currentPageReducer;
