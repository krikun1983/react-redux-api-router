import { DETAILS } from '../constants/api';

const changeLocation = (url: string): string => {
  const positions = url.lastIndexOf(DETAILS);
  const positionStartUrl = positions + DETAILS.length;
  const params = url.slice(positionStartUrl);
  const positionEndParams = params.lastIndexOf('/');
  return params.slice(0, positionEndParams);
};

export default changeLocation;
