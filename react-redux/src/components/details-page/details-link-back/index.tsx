import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import iconGoBack from '../../../assets/images/back.svg';
import { SearchResultsTableViewActionTypes } from '../../../store/types/searchResultsTableView';

const DetailsLinkBack = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoBack = (): void => {
    history.go(-1);
    dispatch({ type: SearchResultsTableViewActionTypes.CLOSE });
  };
  return (
    <button className="back_link" onClick={handleGoBack} type="button">
      <img className="back_link_img" src={iconGoBack} alt="go back" />
      <span>Go back</span>
    </button>
  );
};

export default DetailsLinkBack;
