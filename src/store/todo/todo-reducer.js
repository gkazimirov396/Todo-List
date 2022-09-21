import { ADD, CANCEL, DEL, ENABLE, SAVE, EDIT } from '../types';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
  isEditing: null,
  isDisabled: true
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DEL:
      return {
        ...state,
        todos: action.payload,
      };
    case EDIT:
      return {
        ...state,
        isEditing: action.payload,
      };
    case SAVE:
      return {
        ...state,
        todos: action.payload,
      };
    case CANCEL:
      return {
        ...state,
        isEditing: null,
        isDisabled: true
      };
    case ENABLE:
      return {
        ...state,
        isDisabled: false
      }
    default:
      return state;
  }
};

export default todoReducer;
