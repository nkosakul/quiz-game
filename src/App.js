import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Logo</Link>
        </header>
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById('root'));
