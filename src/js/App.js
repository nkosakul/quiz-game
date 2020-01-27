import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './Header';
import QuizBoard from './QuizBoard';
import Player from './Player';
import client from './graphql/db';
import '../styles/index.scss';

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
