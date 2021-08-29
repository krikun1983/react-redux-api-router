import React from 'react';
import { useDispatch } from 'react-redux';

import Form from '../../components/form';
import PageNavigation from '../../components/main/pages-navigation';
import Table from '../../components/table';
import getPageId from '../../services/getPageId';
import { CurrentPageActionType } from '../../store/types/currentPage';
import { DataApiActionTypes } from '../../store/types/dataApi';
import { SearchFieldNameErrorTypes } from '../../store/types/searchFieldNameError';
import { SearchResultsTableViewActionTypes } from '../../store/types/searchResultsTableView';
import { GetApiData } from '../../types/form-api';
import getApiResource from '../../utils/network';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  const getResource = async (getUrl: string): Promise<void> => {
    const body = await getApiResource(getUrl);
    const bodyType = body as GetApiData;

    if (bodyType) {
      dispatch({ type: DataApiActionTypes.LOADING, payload: bodyType });
      dispatch({ type: CurrentPageActionType.PREV, payload: (bodyType as GetApiData).info.prev });
      dispatch({ type: CurrentPageActionType.NEXT, payload: (bodyType as GetApiData).info.next });
      dispatch({ type: CurrentPageActionType.CURRENT, payload: getPageId(getUrl) });
      dispatch({ type: SearchResultsTableViewActionTypes.SHOW });
      dispatch({ type: SearchFieldNameErrorTypes.SUCCESS });
    } else {
      dispatch({ type: SearchResultsTableViewActionTypes.CLOSE });
      dispatch({ type: SearchFieldNameErrorTypes.NOT_SUCCESS });
    }
  };

  return (
    <>
      <Form onGetResource={getResource} />
      <PageNavigation onGetResource={getResource} />
      <Table />
    </>
  );
};

export default HomePage;
