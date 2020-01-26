import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { Provider } from 'react-redux';
import store from './react-redux/store';
import QuizBoard from './QuizBoard';
import Player from './Player';
import client from './graphql/db';
import { gql } from "apollo-boost";
import '../styles/index.scss';
import { ApolloProvider } from '@apollo/react-hooks';

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <header>
            <Link to="/">Logo</Link>
          </header>
          <Router>
            <QuizBoard path="/quiz" />
            <Player path="/player/:id" />
          </Router>
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById('root'));
