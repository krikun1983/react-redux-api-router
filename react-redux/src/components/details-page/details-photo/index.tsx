import React from 'react';
import useTypeSelector from '../../../store/hooks/useTypeSelector';

const DetailsPhotoComponent = (): JSX.Element => {
  const { detailsPhoto } = useTypeSelector(state => state.detailsPhoto);
  const { detailsTitle } = useTypeSelector(state => state.detailsTitle);
  return (
    <div className="details__container_photo">
      <img className="details__photo" src={detailsPhoto} alt={detailsTitle} />
    </div>
  );
};

export default DetailsPhotoComponent;
