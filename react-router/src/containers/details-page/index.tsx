import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router';
import DetailsLinkBack from '../../components/details-page/details-link-back';
import DetailsPhotoComponent from '../../components/details-page/details-photo';
import DetailsInfoComponent from '../../components/details-page/details-info';
import { API_CHARACTERS, API_EPISODES, API_LOCATIONS } from '../../constants/api';
import { DetailsProps, MatchProps, Res } from '../../types/details';
import { ApiItem, ResultsCharacter } from '../../types/form-api';
import getApiResource from '../../utils/network';

const DetailsPage = ({ searchRadioValue }: DetailsProps): JSX.Element => {
  const [errorApi, setErrorApi] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState<Res[] | null>(null);
  const [detailsTitle, setDetailsTitle] = useState<string>('');
  const [detailsPhoto, setDetailsPhoto] = useState<string>('');

  const match = useRouteMatch<MatchProps>();

  useEffect(() => {
    (async (): Promise<void> => {
      const { id } = match.params;
      let response;
      if (searchRadioValue === ApiItem.CHARACTER) {
        response = await getApiResource(`${API_CHARACTERS}/${id}/`);
      } else if (searchRadioValue === ApiItem.LOCATION) {
        response = await getApiResource(`${API_LOCATIONS}/${id}/`);
      } else {
        response = await getApiResource(`${API_EPISODES}/${id}/`);
      }
      // console.log(response);

      if (response) {
        if (searchRadioValue === ApiItem.CHARACTER) {
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

          setErrorApi(errorApi);
        }
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
          {detailsInfo && <DetailsInfoComponent detailsInfo={detailsInfo} searchRadioValue={searchRadioValue} />}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
