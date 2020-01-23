import React from 'react';
import QuizItem from './QuizItem';

const QuizCategory = ({ category, questions }) => {
  return (
    <div className="column">
      <h2 className="quiz-title">{category}</h2>
      {questions.map(question => (
        <QuizItem key={question.id} {...question} />
      ))}
    </div>
  );
};

export default QuizCategory;
