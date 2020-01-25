import { SET_ANSWER, SET_ACTIVE_QUESTION } from './actions';

export function setAnswer(answer) {
  return { type: SET_ANSWER, payload: answer };
}

export function setActiveQuestion(questions) {
  return { type: SET_ACTIVE_QUESTION, payload: questions };
}