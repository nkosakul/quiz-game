import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import QuizCategory from './QuizCategory';

const ALL_CATEGORIES = gql`
  query getAllCategories {
    allCategories {
      data {
        color
        id
        title
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
        ({ id, title, color }) => (
          <QuizCategory
            key={id}
            color={color}
            id={id}
            title={title}
          />
        )
      )}
    </div>
  );
};


export default QuizBoard;