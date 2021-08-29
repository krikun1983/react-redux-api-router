import { Res } from '../../types/details';

export interface DetailsPageState {
  detailsPhoto: string;
  detailsTitle: string;
  detailsInfo: Res[];
}

export interface DetailsPageAction {
  type: string;
  payload: string | Res[];
}
