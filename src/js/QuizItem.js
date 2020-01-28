import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Modal from './Modal';
import { UPDATE_QUESTION } from './graphql/mutations';

const QuizItem = ({ questionObj, color, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const [updateQuestion] = useMutation(UPDATE_QUESTION(questionObj.id));

  const handleUpdateQuestion = isActive => {
    updateQuestion({
      variables: {
        isActive,
      },
    });
  };

  const handleClosingModal = () => {
    setShowModal(false);
    setIsAnswered(true);
    handleUpdateQuestion(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    handleUpdateQuestion(true);
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

            {isAdmin === 'admin' ? (
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
            ) : null}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default QuizItem;
