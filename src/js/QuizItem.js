import React, { useState } from 'react';
import { gql } from 'apollo-boost/lib/index';
import { useMutation } from '@apollo/react-hooks';
import Modal from './Modal';

const UPDATE_QUESTION = gql`
  mutation UpdateAQuestion(
    $_id: ID!
    $id: ID!
    $points: Int!
    $question: String!
    $type: String!
    $category: String!
    $answer: String!
    $isActive: Boolean!
    $categoryID: ID!
  ) {
    updateQuestion(
      id: $_id
      data: {
        id: $id
        question: $question
        type: $type
        points: $points
        category: $category
        answer: $answer
        isActive: $isActive
        owner: { connect: $categoryID }
      }
    ) {
      id
      question
      type
      points
      category
      answer
      isActive
      owner {
        id
      }
    }
  }
`;

const QuizItem = ({ questionObj, categoryID, color }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const [updateQuestion] = useMutation(UPDATE_QUESTION);
  const count = 0;

  const handleClosingModal = () => {
    setShowModal(false);
    setIsAnswered(true);
  };

  const handleOpenModal = () => {
    const { _id, id, question, type, points, category, answer } = questionObj;

    updateQuestion({
      variables: {
        _id,
        id,
        question,
        type,
        points,
        category,
        answer,
        isActive: true,
        categoryID,
      },
    });

    setShowModal(true);
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${color} button--fullwidth`}
        onClick={() => handleOpenModal()}
        disabled={isAnswered}
      >
        {questionObj.points}
      </button>

      {showModal ? (
        <Modal>
          <button className="close-btn" onClick={() => handleClosingModal()}>
            X
          </button>
          <div>
            <small>{count} / 2</small>
            <h2 className="question-title">{questionObj.question}</h2>

            {showAnswer ? (
              <p className="answer-text">{questionObj.answer}</p>
            ) : null}

            {showPlayerAnswers ? (
              <table className="table">
                <tbody>
                  {/*{players.map(({ id, name, answer }) => (*/}
                  {/*<tr key={id}>*/}
                  {/*<td className="name">{name}</td>*/}
                  {/*<td className="answer">{answer}</td>*/}
                  {/*</tr>*/}
                  {/*))}*/}
                </tbody>
              </table>
            ) : null}

            <div className="buttons">
              <button
                className="button"
                onClick={() => setShowPlayerAnswers(true)}
              >
                Show User answers
              </button>
              <button className="button" onClick={() => setShowAnswer(true)}>
                Show correct answer
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default QuizItem;
