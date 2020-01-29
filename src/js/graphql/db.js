import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
require('dotenv').config();

//TODO: https://docs.hasura.io/1.0/graphql/manual/guides/integrations/apollo-subscriptions.html
const getHeaders = () => {
  return {
    'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_KEY,
    'X-Hasura-Role': 'anonymous',
  };
};

const wsurl = 'wss://nat-quiz.herokuapp.com/v1/graphql';
const httpurl = 'https://nat-quiz.herokuapp.com/v1/graphql';

const wsLink = new WebSocketLink({
  uri: wsurl,
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
  },
});

const httpLink = new HttpLink({
  uri: httpurl,
  fetch,
  headers: getHeaders(),
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
