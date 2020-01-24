import { combineReducers } from 'redux';
import { SET_ANSWER } from './actions';

// action is an object:
// {
//   type: string,
//   payload: string/number/Boolean/Object
//   error: Error,
//   metadata: Object,
// }

const answer = (state = '', action) => {
  if (action.type === SET_ANSWER) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ answer });

export default rootReducer;
