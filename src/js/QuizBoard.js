import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import QuizCategory from './QuizCategory';

const ALL_CATEGORIES = gql`
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

const QuizBoard = () => {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>error!</p>
  }

  const quizCategories = data.allCategories.data;

  return (
    <div className="grid">
      {quizCategories.map(
        ({ _id, title, color, questions }) => (
          <QuizCategory
            key={_id}
            color={color}
            id={_id}
            title={title}
            questions={questions}
          />
        )
      )}
    </div>
  );
};


export default QuizBoard;