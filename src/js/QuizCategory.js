import React from 'react';
import QuizItem from './QuizItem';
import { GET_QUESTIONS_OF_CATEGORY } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const QuizCategory = ({ id, name, color }) => {
  const { loading, error, data } = useQuery(GET_QUESTIONS_OF_CATEGORY(id));

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!</p>;
  }

  const questions = data.question;

  return (
    <div className="column">
      <h2 className="quiz-title">{name}</h2>
      {questions.map(question => (
        <QuizItem
          key={question.id}
          categoryID={id}
          color={color}
          questionObj={question}
        />
      ))}
    </div>
  );
};

export default QuizCategory;
