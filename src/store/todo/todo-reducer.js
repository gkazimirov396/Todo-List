import {
  REORDER_TODOS,
  CREATE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CANCEL_EDIT_TODO,
  ENABLE_INPUT,
} from '../types';

const initialState = {
  todos: [],
  isEditing: null,
  isDisabled: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        isEditing: action.payload,
      };
    case SAVE_TODO:
      return {
        isEditing: null,
        isDisabled: true,
        todos: action.payload,
      };
    case CANCEL_EDIT_TODO:
      return {
        ...state,
        isEditing: null,
        isDisabled: true,
      };
    case ENABLE_INPUT:
      return {
        ...state,
        isDisabled: false,
      };
    case REORDER_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
