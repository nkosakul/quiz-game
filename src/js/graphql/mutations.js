import { gql } from 'apollo-boost';

export const UPDATE_QUESTION = gql`
  mutation UpdateAQuestion(
    $_id: ID!
    $id: ID!
    $points: Int!
    $question: String!
    $type: String!
    $category: String!
    $answer: String!
    $isActive: Boolean!
    $categoryID: ID!
  ) {
    updateQuestion(
      id: $_id
      data: {
        id: $id
        question: $question
        type: $type
        points: $points
        category: $category
        answer: $answer
        isActive: $isActive
        owner: { connect: $categoryID }
      }
    ) {
      id
      question
      type
      points
      category
      answer
      isActive
      owner {
        id
      }
    }
  }
`;
