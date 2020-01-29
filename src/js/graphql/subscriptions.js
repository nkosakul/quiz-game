import { gql } from 'apollo-boost';

export const WATCH_ACTIVE_QUESTION = gql`
  subscription fetchActiveQuestions {
    question(where: { isActive: { _eq: true } }) {
      isActive
    }
  }
`;

export const WATCH_ANSWERED_QUESTION = id => gql`
  subscription MySubscription {
  question(where: {id: {_eq: ${id}}, isAnswered: {_eq: true}}) {
    isAnswered
  }
}

`;
