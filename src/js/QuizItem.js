import React, { useState } from 'react';
import {gql} from "apollo-boost/lib/index";
import { useMutation } from '@apollo/react-hooks'
import Modal from './Modal';

const UPDATE_QUESTION = gql`
  mutation UpdateAQuestion {
    updateQuestion(
      id: "255572166159893011"
      data: {
        id: "q1"
        question: "How old is Nat?"
        type: "String"
        points: 100
        category: "Nat"
        answer: "28"
        isActive: true
        owner: { connect: "255570940675490323" }
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

const GET_QUESTION = id => gql`
  {
    findQuestionByID(id: "255572166159893011") {
      id
    }
  }
`;

const QuizItem = ({ question, categoryID, color }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPlayerAnswers, setShowPlayerAnswers] = useState(false);
  const [updateQuestion] = useMutation(
    UPDATE_QUESTION,
    {
      update(cache, { data: { updateQuestion } }) {
        const test = cache.readQuery({ query: GET_QUESTION(question._id) });
        console.log(test);
        // cache.writeQuery({
        //   query: GET_QUESTION(question._id),
        //   data: { todos: todos.concat([updateQuestion]) },
        // });
      }
    }
  );
  const count = 0;

  const handleClosingModal = () => {
    setShowModal(false);
    setIsAnswered(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    updateQuestion({
      variables: {
        type: question
      }
    });
  };

  return (
    <div className="quiz-item-box">
      <button
        className={`button button--${color} button--fullwidth`}
        onClick={() => handleOpenModal()}
        disabled={isAnswered}
      >
        {question.points}
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
            <h2 className="question-title">{question.question}</h2>

            {showAnswer ? <p className="answer-text">{question.answer}</p> : null}

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