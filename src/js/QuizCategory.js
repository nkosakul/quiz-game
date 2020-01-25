import React from 'react';
import QuizItem from './QuizItem';
import {connect} from "react-redux";

const QuizCategory = ({ category, questions, categoryColor, categoryID }) => {
  return (
    <div className="column">
      <h2 className="quiz-title">{category}</h2>
      {questions.map(question => {
        const isSameCategory = category === question.category;
        return isSameCategory && <QuizItem
          key={question.id}
          categoryColor={categoryColor}
          categoryID={categoryID}
          {...question}
        />
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(QuizCategory);
