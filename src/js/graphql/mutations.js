import { gql } from 'apollo-boost';

export const UPDATE_QUESTION_ACTIVE = id => gql`
  mutation UpdateActiveQuestion($isActive: Boolean!) {
    update_question(where: {id: {_eq: ${id}}}, _set: {isActive: $isActive}) {
      affected_rows
      returning {
        isActive
      }
    }
  }
`;

export const UPDATE_QUESTION_ANSWERED = id => gql`
  mutation UpdateAnsweredQuestion($isAnswered: Boolean!) {
    update_question(where: {id: {_eq: ${id}}}, _set: {isAnswered: $isAnswered}) {
      affected_rows
      returning {
        isAnswered
      }
    }
  }
`;
