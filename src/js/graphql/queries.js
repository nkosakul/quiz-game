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
