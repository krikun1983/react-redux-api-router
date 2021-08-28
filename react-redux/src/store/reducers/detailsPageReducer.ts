import { DetailsPageAction, DetailsPageActionTypes, DetailsPageState } from '../types/detailsPage';
import { Res } from '../../types/details';

const initialState: DetailsPageState = {
  detailsPhoto: '',
  detailsTitle: '',
  detailsInfo: [],
};

const detailsPageReducer = (state = initialState, action: DetailsPageAction): DetailsPageState => {
  switch (action.type) {
    case DetailsPageActionTypes.PHOTO:
      return { ...state, detailsPhoto: action.payload as string };
    case DetailsPageActionTypes.TITLE:
      return { ...state, detailsTitle: action.payload as string };
    case DetailsPageActionTypes.INFO:
      return { ...state, detailsInfo: [...(action.payload as Res[])] };
    default:
      return state;
  }
};

export default detailsPageReducer;
