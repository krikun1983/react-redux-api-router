import React from 'react';
import Form from '../../components/form';
import PageNavigation from '../../components/main/pages-navigation';
import Table from '../../components/table';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Form />
      <PageNavigation />
      <Table />
    </>
  );
};

export default HomePage;
