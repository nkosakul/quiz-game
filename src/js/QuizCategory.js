import React from 'react';
import QuizItem from './QuizItem';
import {gql} from "apollo-boost/lib/index";


const QuizCategory = ({ title, color, questions }) => {
  return (
    <div className="column">
      <h2 className="quiz-title">{title}</h2>
      {questions.map(question => (
        <QuizItem
          key={question.id}
          color={color}
          questions={questions}
          {...question}
        />
      ))}
    </div>
  );
};

export default QuizCategory;