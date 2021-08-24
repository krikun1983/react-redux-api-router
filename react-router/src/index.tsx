import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
