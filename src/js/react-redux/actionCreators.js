import { SET_ANSWER } from './actions';

export function setAnswer(answer) {
  return { type: SET_ANSWER, payload: answer };
}
