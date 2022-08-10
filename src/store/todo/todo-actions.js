import { ADD, DEL, CANCEL, SAVE, SHOW, DISABLE } from '../types';

export const addTodoAction = payload => dispatch => {
  return dispatch({ type: ADD, payload });
};

export const deleteTodoAction = id => dispatch => {
  return dispatch({ type: DEL, payload: id });
};

export const showTodoAction = id => dispatch => {
  return dispatch({ type: SHOW, payload: id });
};

export const saveTodoAction = payload => dispatch => {
  return dispatch({ type: SAVE, payload });
};

export const cancelTodoAction = () => dispatch => {
  return dispatch({ type: CANCEL });
};

export const disableInputAction = () => dispatch => {
  return dispatch({ type: DISABLE });
};
