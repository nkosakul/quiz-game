import { gql } from 'apollo-boost';

export const GET_PLAYER_BY_ID = id => gql`
  {
     findPlayerByID(id: "${id}") {
       id
       name
       answer
       points
     }
   }
`;

export const GET_QUESTIONS_OF_CATEGORY = id => gql`
  query GetQuestionRelatedToCategory {
    question(where: {category: {_eq: ${id}}}) {
      answer
      id
      isActive
      category
      points
      question
      type
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  {
    category {
      id
      name
      color
    }
  }
`;

export const GET_ACTIVE_QUESTION = gql`
  {
    question(where: { isActive: { _eq: true } }) {
      question
    }
  }
`;
