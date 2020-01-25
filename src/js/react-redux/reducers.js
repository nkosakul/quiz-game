import { combineReducers } from 'redux';
import { SET_ANSWER, SET_ACTIVE_QUESTION } from './actions';

// action is an object:
// {
//   type: string,
//   payload: string/number/Boolean/Object
//   error: Error,
//   metadata: Object,
// }

const DEFAULT_PLAYER_STATE = [
  {
    "id": 1,
    "name": "Player 1",
    "answered": false,
    "answer": "test",
    "points": 0
  },
  {
    "id": 2,
    "name": "Player 2",
    "answered": false,
    "answer": "test 2",
    "points": 0
  }
];

const DEFAULT_CATEGORIES_STATE = [
  {
    "categoryID": 1,
    "categoryColor": "orange",
    "category": "Movies",
  },
  {
    "categoryID": 2,
    "categoryColor": "red",
    "category": "3pc",
  },
  {
    "categoryID": 3,
    "categoryColor": "green",
    "category": "Sci-Fi",
  },
  {
    "categoryID": 4,
    "categoryColor": "blue",
    "category": "Comics",
  }
];

const DEFAULT_QUESTIONS_STATE = [
  {
    "id": 1,
    "points": 100,
    "question": "How are you today?",
    "questionType": "string",
    "category": "Movies",
    "answer": "good",
    "isActive": false,
    "playerAnswers": []
  },
  {
    "id": 2,
    "points": 100,
    "question": "Test?",
    "questionType": "string",
    "category": "3pc",
    "answer": "good",
    "isActive": false,
    "playerAnswers": []
  },
  {
    "id": 3,
    "points": 100,
    "question": "How are you today?",
    "questionType": "string",
    "category": "Sci-Fi",
    "answer": "good",
    "isActive": false,
    "playerAnswers": []
  },
  {
    "id": 4,
    "points": 100,
    "question": "marvel?",
    "questionType": "string",
    "category": "Comics",
    "answer": "good",
    "isActive": false,
    "playerAnswers": []
  }
];

const players = (state = DEFAULT_PLAYER_STATE, action) => {
  if (action.type === SET_ANSWER) {
    return action.payload;
  }
  return state;
};

const quizCategories = (state = DEFAULT_CATEGORIES_STATE, action) => {
  if (action.type === SET_ANSWER) {
    return action.payload;
  }
  return state;
};

const questions = (state = DEFAULT_QUESTIONS_STATE, action) => {
  if (action.type === SET_ACTIVE_QUESTION) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ players, quizCategories, questions });

export default rootReducer;
