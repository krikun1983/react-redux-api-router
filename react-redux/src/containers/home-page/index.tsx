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

  const [prevPage, setPrevPage] = useState<string | null>('');
  const [nextPage, setNextPage] = useState<string | null>('');

  const getResource = async (getUrl: string): Promise<void> => {
    const body = await getApiResource(getUrl);
    const bodyType = body as GetApiData;

    if (bodyType) {
      setDataApi(bodyType);
      setPrevPage((bodyType as GetApiData).info.prev);
      setNextPage((bodyType as GetApiData).info.next);

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
      <PageNavigation prevPage={prevPage} nextPage={nextPage} onGetResource={getResource} />
      <Table dataApi={dataApi} />
    </>
  );
};

export default HomePage;
