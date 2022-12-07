import {
  CREATE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CANCEL_EDIT_TODO,
  ENABLE_INPUT,
  REORDER_TODOS,
} from '../types';

export const addTodoAction = payload => ({ type: CREATE_TODO, payload });

export const deleteTodoAction = payload => ({ type: REMOVE_TODO, payload });

export const reorderTodosAction = newTodos => ({ type: REORDER_TODOS, payload: newTodos });

export const editTodoAction = id => ({ type: EDIT_TODO, payload: id });

export const saveTodoAction = payload => ({ type: SAVE_TODO, payload });

export const cancelTodoAction = () => ({ type: CANCEL_EDIT_TODO });

export const enableInputAction = () => ({ type: ENABLE_INPUT });
