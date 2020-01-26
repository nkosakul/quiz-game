import React from 'react';
import QuizItem from './QuizItem';
import {gql} from "apollo-boost/lib/index";
import {useQuery} from "@apollo/react-hooks/lib/index";

const ALL_QUESTIONS = gql`
  query getAllQuestions {
  allQuestions {
    data {
      id
      points
      question
      category
      answer
      isActive
    }
  }
}

`;

const QuizCategory = ({ id, title, color }) => {
  const { loading, error, data } = useQuery(ALL_QUESTIONS);

  if (loading) {
    return <b>loading...</b>
  }

  if (error) {
    return <b>error!</b>
  }

  console.log(data);
  return (
    <div className="column">
      <h2 className="quiz-title">{title}</h2>

    </div>
  );
};

export default QuizCategory;
// {questions.map(question => {
//   const isSameCategory = category === question.category;
//   return isSameCategory && <QuizItem
//     key={question.id}
//     color={color}
//     categoryID={id}
//     {...question}
//   />
// })}