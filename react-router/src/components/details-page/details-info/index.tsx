import React from 'react';
import { DetailsInfoProps } from '../../../types/details';
import { ApiItem } from '../../../types/form-api';

const DetailsInfoComponent = ({ detailsInfo, searchRadioValue }: DetailsInfoProps): JSX.Element => {
  return (
    <div className="details__container_info">
      <ul className="details__info__list">
        {searchRadioValue === ApiItem.CHARACTER ? (
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
        {searchRadioValue === ApiItem.LOCATION ? (
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
