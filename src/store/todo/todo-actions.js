import { ADD, DEL, CANCEL, SAVE, EDIT, ENABLE } from '../types';

export const addTodoAction = payload => dispatch => {
  return dispatch({ type: ADD, payload });
};

export const deleteTodoAction = payload => dispatch => {
  return dispatch({ type: DEL, payload });
};

export const editTodoAction = id => dispatch => {
  return dispatch({ type: EDIT, payload: id });
};

export const saveTodoAction = payload => dispatch => {
  return dispatch({ type: SAVE, payload });
};

export const cancelTodoAction = () => dispatch => {
  return dispatch({ type: CANCEL });
};

export const enableInputAction = () => dispatch => {
  return dispatch({ type: ENABLE });
};
