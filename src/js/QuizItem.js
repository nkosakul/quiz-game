import React, { useState } from 'react';
import Modal from './Modal';

const QuizItem = ({ question, points, answer }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClosingModal = () => {
    setShowModal(false);
    setShowAnswer(false);
  };

  return (
    <div className="quiz-item-box">
      <button
        className="button button--blue button--fullwidth"
        onClick={() => setShowModal(true)}
      >
        {points}
      </button>

      {showModal ? (
        <Modal>
          <button className="close-btn" onClick={() => handleClosingModal()}>
            X
          </button>
          <div>
            <h2 className="question-title">{question}</h2>
            {showAnswer ? <p className="answer-text">{answer}</p> : null}
            <div className="buttons">
              <button className="button">Show User answers</button>
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
