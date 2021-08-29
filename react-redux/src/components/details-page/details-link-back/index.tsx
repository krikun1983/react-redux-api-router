import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import iconGoBack from '../../../assets/images/back.svg';
import useTypeSelector from '../../../store/hooks/useTypeSelector';
import getResource from '../../../utils/networksResource';

const DetailsLinkBack = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUrl } = useTypeSelector(state => state.currentUrl);

  const handleGoBack = async (): Promise<void> => {
    history.go(-1);
    await getResource(currentUrl, dispatch);
  };
  return (
    <button className="back_link" onClick={handleGoBack} type="button">
      <img className="back_link_img" src={iconGoBack} alt="go back" />
      <span>Go back</span>
    </button>
  );
};

export default DetailsLinkBack;
