import React, { useState } from 'react';
import Modal from './Modal';

const QuizItem = ({ players, id, question, points, answer, isActive, color }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const count = 0;

  const handleClosingModal = () => {
    setShowModal(false);
    setIsAnswered(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);

    // TODO: set active question
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${color} button--fullwidth`}
        onClick={() => handleOpenModal()}
        disabled={isAnswered}
      >
        {points}
      </button>

      {showModal ? (
        <Modal>
          <button className="close-btn" onClick={() => handleClosingModal()}>
            X
          </button>
          <div>
            <small>
              {count} / 2
            </small>
            <h2 className="question-title">{question}</h2>

            {showAnswer ? <p className="answer-text">{answer}</p> : null}

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