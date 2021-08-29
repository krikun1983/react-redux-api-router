import { GetApiData } from '../../types/form-api';

export interface DataApiState {
  dataApi: GetApiData | null;
}

export interface DataApiAction {
  type: string;
  payload: GetApiData;
}

export enum DataApiActionTypes {
  LOADING = 'LOADING',
}
