import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import QuizCategory from './QuizCategory';
import { GET_ALL_CATEGORIES } from './graphql/queries';

const QuizBoard = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!</p>;
  }

  const quizCategories = data.category;

  return (
    <div className="grid">
      {quizCategories.map(({ id, name, color }) => (
        <QuizCategory key={id} color={color} id={id} name={name} />
      ))}
    </div>
  );
};

export default QuizBoard;
