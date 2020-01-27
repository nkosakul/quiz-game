import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/db';
import Header from './Header';
import QuizBoard from './QuizBoard';
import Player from './Player';
import '../styles/index.scss';

console.log(client);

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Header />
        <Router>
          <QuizBoard path="/quiz" />
          <Player path="/player/:id" />
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById('root'));
