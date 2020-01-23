import React, { useState } from 'react';
import Modal from './Modal';
import data from '../../data';

const QuizItem = ({ question, points, answer, categoryColor }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const players = data.players;
  const count = 0;

  const handleClosingModal = () => {
    setShowModal(false);
    setIsAnswered(true);
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${categoryColor} button--fullwidth`}
        onClick={() => setShowModal(true)}
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
              {count} / {players.length}
            </small>
            <h2 className="question-title">{question}</h2>

            {showAnswer ? <p className="answer-text">{answer}</p> : null}

            {showPlayerAnswers ? (
              <table className="table">
                {players.map(({ id, name, answer }) => (
                  <tr key={id}>
                    <td className="name">{name}</td>
                    <td className="answer">{answer}</td>
                  </tr>
                ))}
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
