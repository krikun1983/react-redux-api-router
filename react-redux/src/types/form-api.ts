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

export type ResultsEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: string[];
};

export interface GetApiData {
  info: Info;
  results: Results[];
}

export enum ApiItem {
  CHARACTER = 'character',
  LOCATION = 'location',
  EPISODE = 'episode',
}
