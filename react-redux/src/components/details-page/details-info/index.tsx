import React from 'react';

import { useLocation } from 'react-router';
import changeLocation from '../../../services/changeLocation';
import useTypeSelector from '../../../store/hooks/useTypeSelector';
import { ApiItem } from '../../../types/form-api';

const DetailsInfoComponent = (): JSX.Element => {
  const locations = useLocation();
  const newLocation = changeLocation(locations.pathname);
  const { detailsInfo } = useTypeSelector(state => state.detailsInfo);

  return (
    <div className="details__container_info">
      <ul className="details__info__list">
        {newLocation === ApiItem.CHARACTER ? (
          detailsInfo.map(({ title, data }) => {
            return (
              data && (
                <li className="details__info__list__item" key={title}>
                  <div className="details__info__list__item_title">
                    <span>{title}:</span> {data}{' '}
                  </div>
                </li>
              )
            );
          })
        ) : (
          <></>
        )}
        {newLocation === ApiItem.LOCATION ? (
          detailsInfo.map(({ title, data }) => {
            return (
              data && (
                <li className="details__info__list__item" key={title}>
                  <div className="details__info__list__item_title">
                    <span>{title}:</span> {data}{' '}
                  </div>
                </li>
              )
            );
          })
        ) : (
          <></>
        )}
        {newLocation === ApiItem.EPISODE ? (
          detailsInfo.map(({ title, data }) => {
            return (
              data && (
                <li className="details__info__list__item" key={title}>
                  <div className="details__info__list__item_title">
                    <span>{title}:</span> {data}{' '}
                  </div>
                </li>
              )
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default DetailsInfoComponent;
