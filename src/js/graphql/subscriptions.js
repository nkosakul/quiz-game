import { gql } from 'apollo-boost';

export const WATCH_ACTIVE_QUESTION = gql`
  subscription fetchActiveQuestions {
    question(where: { isActive: { _eq: true } }) {
      isActive
    }
  }
`;

export const WATCH_QUESTION = id => gql`
  subscription MySubscription {
    question(where: {id: {_eq: ${id}}}) {
      isActive
      isAnswered
      showAnswer
    }
  }
`;
