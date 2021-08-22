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
  episode: string[];
};

export interface GetApiData {
  info: Info;
  results: Results[];
}

export type SetFormValuesProps = {
  onSetDataApi: Dispatch<SetStateAction<GetApiData | null>>;
  onSetTableView: Dispatch<SetStateAction<boolean>>;
  onSetPrevPage: Dispatch<SetStateAction<string | null>>;
  onSetNextPage: Dispatch<SetStateAction<string | null>>;
  onSetCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  onGetResource: (url: string) => Promise<void>;
};

export type TableProps = {
  dataApi: GetApiData | null;
  tableView: boolean;
};

export enum ApiItem {
  CHARACTER = 'character',
  LOCATION = 'location',
  EPISODE = 'episode',
}
