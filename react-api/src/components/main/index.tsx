import React, { useState } from 'react';
import { GetApiData } from '../../types';
import Form from '../form';
import Table from '../table';

const Main = (): JSX.Element => {
  const [dataApi, setDataApi] = useState<GetApiData | null>(null);
  const [tableView, setTableView] = useState<boolean>(false);

  return (
    <main className="main">
      <Form onSetDataApi={setDataApi} onSetTableView={setTableView} />
      <Table dataApi={dataApi} tableView={tableView} />
    </main>
  );
};

export default Main;
