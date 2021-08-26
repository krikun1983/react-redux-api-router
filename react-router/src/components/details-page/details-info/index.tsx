import React from 'react';
import { Res } from '../../../types/details';

type DetailsInfoProps = {
  detailsInfo: Res[];
  searchRadioValue: string;
};

const DetailsInfoComponent = ({ detailsInfo, searchRadioValue }: DetailsInfoProps): JSX.Element => {
  return (
    <div className="details__container_info">
      <ul className="details__info__list">
        {detailsInfo.map(({ title, data }) => {
          return (
            data && (
              <li className="details__info__list__item" key={title}>
                <div className="details__info__list__item_title">
                  <span>{title}:</span> {data}{' '}
                </div>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsInfoComponent;
