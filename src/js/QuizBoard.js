import React from 'react';
import { connect } from 'react-redux';
import QuizCategory from './QuizCategory';

const QuizBoard = ({quizCategories}) => {
  return (
    <div className="grid">
      {quizCategories.map(
        ({ category, categoryID, categoryColor }) => (
          <QuizCategory
            key={categoryID}
            categoryColor={categoryColor}
            categoryID={categoryID}
            category={category}
          />
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(QuizBoard);