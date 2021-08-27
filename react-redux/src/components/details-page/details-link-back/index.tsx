import React from 'react';
import { useHistory } from 'react-router';
import iconGoBack from '../../../assets/images/back.svg';

const DetailsLinkBack = (): JSX.Element => {
  const history = useHistory();

  const handleGoBack = (): void => {
    history.go(-1);
  };
  return (
    <button className="back_link" onClick={handleGoBack} type="button">
      <img className="back_link_img" src={iconGoBack} alt="go back" />
      <span>Go back</span>
    </button>
  );
};

export default DetailsLinkBack;
