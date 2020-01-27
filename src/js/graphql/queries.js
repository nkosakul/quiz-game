import { gql } from 'apollo-boost';

export const ALL_CATEGORIES = gql`
  query getAllCategories {
    allCategories {
      data {
        questions {
          _id
          id
          question
          type
          answer
          points
          isActive
          category
        }
        _id
        id
        title
        color
      }
    }
  }
`;

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

export const GET_ALL_CATEGORIES = gql`
{
  category {
    id
    name
    color
  }
}`;