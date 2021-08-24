import { PARAM_PAGE } from '../constants/api';

const getPageId = (url: string): number => {
  const re = /^[^&]*/;
  const positionStart = url.lastIndexOf(PARAM_PAGE);
  const urlEnd = url.replace(re, '');
  const positionEnd = url.lastIndexOf(urlEnd);
  const id = url.slice(positionStart + PARAM_PAGE.length, positionEnd);
  return +id;
};

export default getPageId;
