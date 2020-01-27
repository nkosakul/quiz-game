import React from 'react';
import { connect } from 'react-redux';

const Player = ({ id, questions }) => {
  console.log(questions);
  console.log(id);
  return (
    <div className="player">
      <h2 className="player-name">as</h2>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <h4>{question.isActive ? 'true' : 'False'}</h4>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Player);
