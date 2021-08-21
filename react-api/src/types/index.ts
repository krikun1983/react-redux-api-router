import { Dispatch, SetStateAction } from 'react';

type Results = {
  name: string;
  image: string;
  status: string;
  species: string;
  episode: string[];
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface GetApiData {
  info: Info;
  results: Results[];
}

export type SetFormValuesProps = {
  onSetDataApi: Dispatch<SetStateAction<GetApiData | null>>;
  onSetTableView: Dispatch<SetStateAction<boolean>>;
};

export type TableProps = {
  dataApi: GetApiData | null;
  tableView: boolean;
};
