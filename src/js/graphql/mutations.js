import { gql } from 'apollo-boost';

export const UPDATE_QUESTION = id => gql`
  mutation UpdateAQuestion($isActive: Boolean!) {
    update_question(where: {id: {_eq: ${id}}}, _set: {isActive: $isActive}) {
      affected_rows
      returning {
        isActive
      }
    }
  }
`;
