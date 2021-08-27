import { GetApiData, Results, ResultsCharacter, ResultsEpisode, ResultsLocation } from '../types/form-api';

const getApiResource = async (
  url: string,
): Promise<boolean | GetApiData | Results | ResultsCharacter | ResultsLocation | ResultsEpisode> => {
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
