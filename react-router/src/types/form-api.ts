import { Dispatch, SetStateAction } from 'react';

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Results = {
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

export type ResultsCharacter = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  created: string;
  episode: string[];
  gender: string;
  type: string;
};

export type ResultsLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
  residents: string[];
};

export interface GetApiData {
  info: Info;
  results: Results[];
}

export type SetFormValuesProps = {
  dataApi: GetApiData | null;
  onSetDataApi: Dispatch<SetStateAction<GetApiData | null>>;
  onSetTableView: Dispatch<SetStateAction<boolean>>;
  onSetCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  onGetResource: (url: string) => Promise<void>;
  onSetSearchRadioValue: Dispatch<SetStateAction<string>>;
  searchRadioValue: string;
  searchError: boolean;
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
