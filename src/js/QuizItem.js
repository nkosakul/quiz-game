import React, { useState } from 'react';
import {setActiveQuestion} from './react-redux/actionCreators'
import { connect } from 'react-redux';
import Modal from './Modal';

const QuizItem = ({ players, id, question, points, answer, isActive, categoryColor, questions, handleActiveQuestion }) => {
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

    let newQuestionsState = [];
    questions.map(question => {
      newQuestionsState.push(Object.assign({}, question, {isActive: id === question.id}));
    });

    handleActiveQuestion(newQuestionsState);
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${categoryColor} button--fullwidth`}
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
              {count} / {players.length}
            </small>
            <h2 className="question-title">{question}</h2>

            {showAnswer ? <p className="answer-text">{answer}</p> : null}

            {showPlayerAnswers ? (
              <table className="table">
                <tbody>
                  {players.map(({ id, name, answer }) => (
                    <tr key={id}>
                      <td className="name">{name}</td>
                      <td className="answer">{answer}</td>
                    </tr>
                  ))}
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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  handleActiveQuestion(newQuestionsState) {
    dispatch(setActiveQuestion((newQuestionsState)))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizItem);