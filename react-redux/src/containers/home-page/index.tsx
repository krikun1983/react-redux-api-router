import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../../components/form';
import PageNavigation from '../../components/main/pages-navigation';
import Table from '../../components/table';
import getPageId from '../../services/getPageId';
import { CurrentPageActionType } from '../../store/types/currentPage';
import { SearchResultsTableViewActionTypes } from '../../store/types/searchResultsTableView';
import { GetApiData } from '../../types/form-api';
import getApiResource from '../../utils/network';

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  const [dataApi, setDataApi] = useState<GetApiData | null>(null);
  const [searchError, setSearchError] = useState<boolean>(false);

  const getResource = async (getUrl: string): Promise<void> => {
    const body = await getApiResource(getUrl);
    const bodyType = body as GetApiData;

    if (bodyType) {
      setDataApi(bodyType);
      dispatch({ type: CurrentPageActionType.PREV, payload: (bodyType as GetApiData).info.prev });
      dispatch({ type: CurrentPageActionType.NEXT, payload: (bodyType as GetApiData).info.next });
      dispatch({ type: CurrentPageActionType.CURRENT, payload: getPageId(getUrl) });
      dispatch({ type: SearchResultsTableViewActionTypes.SHOW });
      setSearchError(false);
    } else {
      dispatch({ type: SearchResultsTableViewActionTypes.CLOSE });
      setSearchError(true);
    }
  };

  return (
    <>
      <Form dataApi={dataApi} onSetDataApi={setDataApi} onGetResource={getResource} searchError={searchError} />
      <PageNavigation onGetResource={getResource} />
      <Table dataApi={dataApi} />
    </>
  );
};

export default HomePage;
