import React, { useState } from 'react';
import getPageId from '../../services/getPageId';
import { GetApiData } from '../../types';
import getApiResource from '../../utils/network';
import Form from '../form';
import Table from '../table';
import PageNavigation from './pages-navigation';

const Main = (): JSX.Element => {
  const [dataApi, setDataApi] = useState<GetApiData | null>(null);
  const [tableView, setTableView] = useState<boolean>(false);

  const [prevPage, setPrevPage] = useState<string | null>('');
  const [nextPage, setNextPage] = useState<string | null>('');
  const [currentPage, setCurrentPage] = useState(1);

  // fn запрос на сервер // const body = await getApiResource(`${BASE_URL}${searchRadioValue}${PARAM_PAGE}${currentPage}`);
  const getResource = async (getUrl: string) => {
    const body = await getApiResource(getUrl);
    const bodyType = body as GetApiData;

    if (bodyType) {
      setDataApi(bodyType);
      setPrevPage((bodyType as GetApiData).info.prev);
      setNextPage((bodyType as GetApiData).info.next);
      setCurrentPage(getPageId(getUrl));

      setTableView(true);
    } else {
      setTableView(false);
    }
  };

  return (
    <main className="main">
      <Form
        onSetDataApi={setDataApi}
        onSetTableView={setTableView}
        onSetPrevPage={setPrevPage}
        onSetNextPage={setNextPage}
        onSetCurrentPage={setCurrentPage}
        currentPage={currentPage}
        onGetResource={getResource}
      />
      <PageNavigation tableView={tableView} prevPage={prevPage} nextPage={nextPage} onGetResource={getResource} />
      <Table dataApi={dataApi} tableView={tableView} />
    </main>
  );
};

export default Main;
