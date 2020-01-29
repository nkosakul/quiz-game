import React, { useState } from 'react';
import { useMutation, useSubscription } from '@apollo/react-hooks';
import Modal from './Modal';
import {
  UPDATE_QUESTION_ACTIVE,
  UPDATE_QUESTION_ANSWERED,
} from './graphql/mutations';
import {
  WATCH_ACTIVE_QUESTION,
  WATCH_ANSWERED_QUESTION,
} from './graphql/subscriptions';

const QuizItem = ({ questionObj, color, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const { data, loading } = useSubscription(
    WATCH_ANSWERED_QUESTION(questionObj.id)
  );
  const [updateQuestionActiveState] = useMutation(
    UPDATE_QUESTION_ACTIVE(questionObj.id)
  );
  const [updateQuestionAnsweredState] = useMutation(
    UPDATE_QUESTION_ANSWERED(questionObj.id)
  );

  const handleClosingModal = () => {
    setShowModal(false);
    updateQuestionActiveState({
      variables: {
        isActive: false,
      },
    });
    updateQuestionAnsweredState({
      variables: {
        isAnswered: true,
      },
    });
  };

  const handleOpenModal = () => {
    setShowModal(true);
    updateQuestionActiveState({
      variables: {
        isActive: true,
      },
    });
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${color} button--fullwidth`}
        onClick={() => handleOpenModal()}
        disabled={
          !loading && data.question.length > 0
            ? data.question[0].isAnswered
            : false
        }
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
