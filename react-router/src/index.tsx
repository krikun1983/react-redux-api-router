import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <Main />
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
