import React, { useEffect, useState } from 'react';

import { useLocation, useRouteMatch } from 'react-router';
import DetailsLinkBack from '../../components/details-page/details-link-back';
import DetailsPhotoComponent from '../../components/details-page/details-photo';
import DetailsInfoComponent from '../../components/details-page/details-info';
import { BASE_URL } from '../../constants/api';
import { DetailsProps, MatchProps, Res } from '../../types/details';
import { ApiItem, ResultsCharacter, ResultsEpisode, ResultsLocation } from '../../types/form-api';
import getApiResource from '../../utils/network';
import planets from '../../assets/images/planets.jpg';
import rick from '../../assets/images/rick.jpg';
import changeLocation from '../../services/changeLocation';

const DetailsPage = ({ pathDetailsPage }: DetailsProps): JSX.Element => {
  const locations = useLocation();
  const newLocation = changeLocation(locations.pathname);
  const [errorApi, setErrorApi] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState<Res[] | null>(null);
  const [detailsTitle, setDetailsTitle] = useState<string>('');
  const [detailsPhoto, setDetailsPhoto] = useState<string>('');

  const match = useRouteMatch<MatchProps>();

  useEffect(() => {
    (async (): Promise<void> => {
      const { id } = match.params;
      let response;
      if (pathDetailsPage === ApiItem.CHARACTER) {
        response = await getApiResource(`${BASE_URL}${newLocation}/${id}`);
      } else if (pathDetailsPage === ApiItem.LOCATION) {
        response = await getApiResource(`${BASE_URL}${newLocation}/${id}`);
      } else if (pathDetailsPage === ApiItem.EPISODE) {
        response = await getApiResource(`${BASE_URL}${newLocation}/${id}`);
      }

      if (response) {
        if (pathDetailsPage === ApiItem.CHARACTER) {
          setDetailsInfo([
            { title: 'Status', data: (response as ResultsCharacter).status },
            { title: 'Species', data: (response as ResultsCharacter).species },
            { title: 'Gender', data: (response as ResultsCharacter).gender },
            { title: 'Created', data: (response as ResultsCharacter).created },
            { title: 'Episode', data: String((response as ResultsCharacter).episode.length) },
            { title: 'Type', data: (response as ResultsCharacter).type },
          ]);
          setDetailsTitle((response as ResultsCharacter).name);
          setDetailsPhoto((response as ResultsCharacter).image);
        } else if (pathDetailsPage === ApiItem.LOCATION) {
          setDetailsInfo([
            { title: 'Type', data: (response as ResultsLocation).type },
            { title: 'Dimension', data: (response as ResultsLocation).dimension },
            { title: 'Created', data: (response as ResultsLocation).created },
            { title: 'Residents', data: String((response as ResultsLocation).residents.length) },
          ]);
          setDetailsTitle((response as ResultsLocation).name);
          setDetailsPhoto(planets);
        } else if (pathDetailsPage === ApiItem.EPISODE) {
          setDetailsInfo([
            { title: 'Air_date', data: (response as ResultsEpisode).air_date },
            { title: 'Episode', data: (response as ResultsEpisode).episode },
            { title: 'Created', data: (response as ResultsEpisode).created },
            { title: 'Characters', data: String((response as ResultsEpisode).characters.length) },
          ]);
          setDetailsTitle((response as ResultsEpisode).name);
          setDetailsPhoto(rick);
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
          <DetailsPhotoComponent detailsPhoto={detailsPhoto} detailsTitle={detailsTitle} />
          {detailsInfo && <DetailsInfoComponent detailsInfo={detailsInfo} pathDetailsPage={pathDetailsPage} />}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
