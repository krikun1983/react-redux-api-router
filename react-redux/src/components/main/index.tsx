import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import uuid from 'react-uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routesConfig from '../../routes/routesConfig';
import Routing from '../../types/routing';

const Main = (): JSX.Element => {
  const location = useLocation();
  const [inProp, setInProp] = useState(true);

  return (
    <main className="main">
      <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames="fade"
          key={location.key}
          onEnter={(): void => setInProp(inProp)}
          onExited={(): void => setInProp(!inProp)}
        >
          <Switch location={location}>
            {routesConfig.map((route: Routing): JSX.Element => {
              return <Route key={uuid()} path={route.path} exact={route.exact} component={route.component} />;
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default Main;
