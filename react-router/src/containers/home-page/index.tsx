import React, { useState } from 'react';
import Form from '../../components/form';
import PageNavigation from '../../components/main/pages-navigation';
import Table from '../../components/table';
import getPageId from '../../services/getPageId';
import { ApiItem, GetApiData } from '../../types/form-api';
import getApiResource from '../../utils/network';

const HomePage = (): JSX.Element => {
  const [dataApi, setDataApi] = useState<GetApiData | null>(null);
  const [tableView, setTableView] = useState<boolean>(false);
  const [searchRadioValue, setSearchRadioValue] = useState<string>(ApiItem.CHARACTER);
  const [searchError, setSearchError] = useState<boolean>(false);

  const [prevPage, setPrevPage] = useState<string | null>('');
  const [nextPage, setNextPage] = useState<string | null>('');
  const [currentPage, setCurrentPage] = useState(1);

  const getResource = async (getUrl: string): Promise<void> => {
    const body = await getApiResource(getUrl);
    const bodyType = body as GetApiData;

    if (bodyType) {
      setDataApi(bodyType);
      setPrevPage((bodyType as GetApiData).info.prev);
      setNextPage((bodyType as GetApiData).info.next);
      setCurrentPage(getPageId(getUrl));

      setTableView(true);
      setSearchError(false);
    } else {
      setTableView(false);
      setSearchError(true);
    }
  };

  return (
    <>
      <Form
        dataApi={dataApi}
        onSetDataApi={setDataApi}
        onSetTableView={setTableView}
        onSetCurrentPage={setCurrentPage}
        currentPage={currentPage}
        onGetResource={getResource}
        onSetSearchRadioValue={setSearchRadioValue}
        searchRadioValue={searchRadioValue}
        searchError={searchError}
      />
      <PageNavigation tableView={tableView} prevPage={prevPage} nextPage={nextPage} onGetResource={getResource} />
      <Table dataApi={dataApi} tableView={tableView} searchRadioValue={searchRadioValue} />
    </>
  );
};

export default HomePage;
