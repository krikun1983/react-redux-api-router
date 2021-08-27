import React from 'react';

type DetailsPhotoProps = {
  detailsPhoto: string;
  detailsTitle: string;
};

const DetailsPhotoComponent = ({ detailsPhoto, detailsTitle }: DetailsPhotoProps): JSX.Element => {
  return (
    <div className="details__container_photo">
      <img className="details__photo" src={detailsPhoto} alt={detailsTitle} />
    </div>
  );
};

export default DetailsPhotoComponent;
