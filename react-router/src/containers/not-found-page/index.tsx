import React from 'react';
import { useLocation } from 'react-router';
import img404 from '../../assets/images/404.png';

const NotFoundPage = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="not-found">
      <img className="not-found__img" src={img404} alt="404" />
      <p className="not-found__text">
        The page- <span>{`{ ${location.pathname} }`}</span> does not exist...
      </p>
    </div>
  );
};

export default NotFoundPage;
