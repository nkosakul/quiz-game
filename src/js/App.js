import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { Provider } from 'react-redux';
import store from './react-redux/store';
import QuizBoard from './QuizBoard';
import Player from './Player';
import '../styles/index.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <header>
          <Link to="/">Logo</Link>
        </header>
        <Router>
          <QuizBoard path="/quiz" />
          <Player path="/player/:id" />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById('root'));
