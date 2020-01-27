import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost';
import fetch from 'node-fetch';
require('dotenv').config();

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  cache: new InMemoryCache(),
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Basic ${process.env.FAUNADB_SERVER_SECRET}`,
      },
    });
  },
});

export default client;
