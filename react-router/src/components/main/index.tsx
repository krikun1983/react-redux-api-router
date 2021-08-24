import React from 'react';
import { Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';
import routesConfig from '../../routes/routesConfig';
import Routing from '../../types/routing';

const Main = (): JSX.Element => {
  return (
    <main className="main">
      <Switch>
        {routesConfig.map((route: Routing): JSX.Element => {
          return <Route key={uuid()} path={route.path} exact={route.exact} component={route.component} />;
        })}
      </Switch>
    </main>
  );
};

export default Main;
