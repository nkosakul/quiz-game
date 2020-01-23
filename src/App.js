import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import QuizBoard from './QuizBoard';

const App = () => {
  return (
    <React.StrictMode>
      <header>
        <Link to="/">Logo</Link>
      </header>
      <Router>
        <QuizBoard path="/quiz" />
      </Router>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById('root'));
