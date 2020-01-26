import React from 'react';
import QuizItem from './QuizItem';
import {gql} from "apollo-boost/lib/index";


const QuizCategory = ({ id, title, color, questions }) => {
  return (
    <div className="column">
      <h2 className="quiz-title">{title}</h2>
      {questions.map(question => (
        <QuizItem
          key={id}
          categoryID={id}
          color={color}
          questionObj={question}
        />
      ))}
    </div>
  );
};

export default QuizCategory;