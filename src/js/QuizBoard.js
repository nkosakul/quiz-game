import React from 'react';
import QuizCategory from './QuizCategory';
import data from '../../data';

const QuizBoard = () => {
  const quizCategories = data.quizCategories;

  return (
    <div className="grid">
      {quizCategories.map(
        ({ category, categoryID, questions, categoryColor }) => (
          <QuizCategory
            key={categoryID}
            categoryColor={categoryColor}
            category={category}
            questions={questions}
          />
        )
      )}
    </div>
  );
};

export default QuizBoard;
