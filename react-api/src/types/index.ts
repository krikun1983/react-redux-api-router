import { Dispatch, SetStateAction } from 'react';

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type Results = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  dimension: string;
  created: string;
  air_date: string;
  characters: string[];
  episode: string;
  gender: string;
};

export interface GetApiData {
  info: Info;
  results: Results[];
}

export type SetFormValuesProps = {
  dataApi: GetApiData | null;
  onSetDataApi: Dispatch<SetStateAction<GetApiData | null>>;
  onSetTableView: Dispatch<SetStateAction<boolean>>;
  onSetPrevPage: Dispatch<SetStateAction<string | null>>;
  onSetNextPage: Dispatch<SetStateAction<string | null>>;
  onSetCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  onGetResource: (url: string) => Promise<void>;
  onSetSearchRadioValue: Dispatch<SetStateAction<string>>;
  searchRadioValue: string;
};

export type TableProps = {
  dataApi: GetApiData | null;
  tableView: boolean;
  searchRadioValue: string;
};

export enum ApiItem {
  CHARACTER = 'character',
  LOCATION = 'location',
  EPISODE = 'episode',
}
