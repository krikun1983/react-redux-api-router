import { Dispatch, SetStateAction } from 'react';

export type MatchProps = {
  id: string;
};

export type HomeProps = {
  searchRadioValue: string;
  onSetSearchRadioValue: Dispatch<SetStateAction<string>>;
};

export type DetailsProps = {
  searchRadioValue: string;
};

export type Res = {
  title: string;
  data: string;
};

export type DetailsInfoProps = {
  detailsInfo: Res[];
  searchRadioValue: string;
};
