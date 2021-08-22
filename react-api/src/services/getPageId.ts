import { PARAM_PAGE } from '../constants/api';

const getPageId = (url: string): number => {
  const position = url.lastIndexOf(PARAM_PAGE);
  const id = url.slice(position + PARAM_PAGE.length, url.length);
  return +id;
};

export default getPageId;
