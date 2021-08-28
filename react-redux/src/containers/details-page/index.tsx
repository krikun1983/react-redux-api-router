import React, { useEffect, useState } from 'react';

import { useLocation, useRouteMatch } from 'react-router';
import { useDispatch } from 'react-redux';
import DetailsLinkBack from '../../components/details-page/details-link-back';
import DetailsPhotoComponent from '../../components/details-page/details-photo';
import DetailsInfoComponent from '../../components/details-page/details-info';
import { BASE_URL } from '../../constants/api';
import { RouteMatchType } from '../../types/details';
import { ApiItem, ResultsCharacter, ResultsEpisode, ResultsLocation } from '../../types/form-api';
import getApiResource from '../../utils/network';
import planets from '../../assets/images/planets.jpg';
import rick from '../../assets/images/rick.jpg';
import changeLocation from '../../services/changeLocation';
import { DetailsPageActionTypes } from '../../store/types/detailsPage';
import useTypeSelector from '../../store/hooks/useTypeSelector';

const DetailsPage = (): JSX.Element => {
  const locations = useLocation();
  const newLocation = changeLocation(locations.pathname);
  const dispatch = useDispatch();
  const { detailsTitle } = useTypeSelector(state => state.detailsTitle);
  const { detailsInfo } = useTypeSelector(state => state.detailsInfo);

  const [errorApi, setErrorApi] = useState(false);

  const match = useRouteMatch<RouteMatchType>();

  useEffect(() => {
    (async (): Promise<void> => {
      const { id } = match.params;
      const response = await getApiResource(`${BASE_URL}${newLocation}/${id}`);

      if (response) {
        if (newLocation === ApiItem.CHARACTER) {
          dispatch({
            type: DetailsPageActionTypes.INFO,
            payload: [
              { title: 'Status', data: (response as ResultsCharacter).status },
              { title: 'Species', data: (response as ResultsCharacter).species },
              { title: 'Gender', data: (response as ResultsCharacter).gender },
              { title: 'Created', data: (response as ResultsCharacter).created },
              { title: 'Episode', data: String((response as ResultsCharacter).episode.length) },
              { title: 'Type', data: (response as ResultsCharacter).type },
            ],
          });
          dispatch({ type: DetailsPageActionTypes.TITLE, payload: (response as ResultsCharacter).name });
          dispatch({ type: DetailsPageActionTypes.PHOTO, payload: (response as ResultsCharacter).image });
        } else if (newLocation === ApiItem.LOCATION) {
          dispatch({
            type: DetailsPageActionTypes.INFO,
            payload: [
              { title: 'Type', data: (response as ResultsLocation).type },
              { title: 'Dimension', data: (response as ResultsLocation).dimension },
              { title: 'Created', data: (response as ResultsLocation).created },
              { title: 'Residents', data: String((response as ResultsLocation).residents.length) },
            ],
          });
          dispatch({ type: DetailsPageActionTypes.TITLE, payload: (response as ResultsLocation).name });
          dispatch({ type: DetailsPageActionTypes.PHOTO, payload: planets });
        } else if (newLocation === ApiItem.EPISODE) {
          dispatch({
            type: DetailsPageActionTypes.INFO,
            payload: [
              { title: 'Air_date', data: (response as ResultsEpisode).air_date },
              { title: 'Episode', data: (response as ResultsEpisode).episode },
              { title: 'Created', data: (response as ResultsEpisode).created },
              { title: 'Characters', data: String((response as ResultsEpisode).characters.length) },
            ],
          });
          dispatch({ type: DetailsPageActionTypes.TITLE, payload: (response as ResultsEpisode).name });
          dispatch({ type: DetailsPageActionTypes.PHOTO, payload: rick });
        }
        setErrorApi(errorApi);
      } else {
        setErrorApi(!errorApi);
      }
    })();
  }, []);

  return (
    <>
      <DetailsLinkBack />
      <div className="details__wrapper">
        <span className="details__title">{detailsTitle}</span>
        <div className="details__container">
          <DetailsPhotoComponent />
          {detailsInfo && <DetailsInfoComponent />}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
