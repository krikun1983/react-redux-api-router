import { GetApiData } from '../types';

const getApiResource = async (url: string): Promise<boolean | GetApiData> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (error) {
    return false;
  }
};

export default getApiResource;
