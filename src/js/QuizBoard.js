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
    console.log(error);
    return <p>error!</p>
  }

  // const quizCategories = data.allCategories.data;

  return (
    <div className="grid">
      {/*{quizCategories.map(({ _id, title, color, questions }) => (*/}
        {/*<QuizCategory*/}
          {/*key={_id}*/}
          {/*color={color}*/}
          {/*id={_id}*/}
          {/*title={title}*/}
          {/*questions={questions}*/}
        {/*/>*/}
      {/*))}*/}
    </div>
  );
};

export default QuizBoard;
