import { ADD, CANCEL, DEL, DISABLE, SAVE, SHOW } from '../types';

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
        todos: state.todos.filter((item, idx) => idx !== action.payload),
      };
    case SHOW:
      return {
        ...state,
        isEditing: action.payload,
      };
    case SAVE:
      return {
        ...state,
        todos: state.todos.map(item => {
          return item.id === action.payload.id
            ? {text: action.payload.text, id: action.payload.id}
            : item;
        }),
      };
    case CANCEL:
      return {
        ...state,
        isEditing: null,
        isDisabled: true
      };
    case DISABLE:
      return {
        ...state,
        isDisabled: false
      }
    default:
      return state;
  }
};

export default todoReducer;
