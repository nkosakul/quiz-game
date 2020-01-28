import { gql } from 'apollo-boost';

export const WATCH_ACTIVE_QUESTION = gql`
  subscription fetchQuestions {
    question(where: { isActive: { _eq: true } }) {
      question
    }
  }
`;
