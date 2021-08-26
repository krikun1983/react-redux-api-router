import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';
import DetailsPage from '../../containers/details-page';
import HomePage from '../../containers/home-page';
import routesConfig from '../../routes/routesConfig';
import { ApiItem } from '../../types/form-api';
import Routing from '../../types/routing';

const Main = (): JSX.Element => {
  const [searchRadioValue, setSearchRadioValue] = useState<string>(ApiItem.CHARACTER);

  return (
    <main className="main">
      <Switch>
        <Route
          key={uuid()}
          path="/"
          exact
          render={(): JSX.Element => (
            <HomePage onSetSearchRadioValue={setSearchRadioValue} searchRadioValue={searchRadioValue} />
          )}
        />
        <Route
          key={uuid()}
          path={`/details/${searchRadioValue}/:id`}
          exact
          render={(): JSX.Element => <DetailsPage searchRadioValue={searchRadioValue} />}
        />
        {routesConfig.map((route: Routing): JSX.Element => {
          return <Route key={uuid()} path={route.path} exact={route.exact} component={route.component} />;
        })}
      </Switch>
    </main>
  );
};

export default Main;
