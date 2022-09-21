import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelTodoAction, saveTodoAction, deleteTodoAction, editTodoAction } from '../../store/todo/todo-actions';

import TodoItem from '../TodoItem/TodoItem';
import './Todos.scss';

const Todos = props => {
  const [enteredChangedValue, setEnteredChangedValue] = useState('');

  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    setEnteredChangedValue(event.target.value);
  };

  const removeTodo = id => {
    return todos.filter((item, idx) => idx !== id);
  };

  const removeTodoHandler = id => {
    dispatch(deleteTodoAction(removeTodo(id)));
  };

  const editTodoHandler = id => {
    dispatch(editTodoAction(id));
  };

  const saveTodo = id => {
    return todos.map(item => {
      return item.id === id
        ? {text: enteredChangedValue, id}
        : item;
    })
  };

  const inputSaveHandler = id => {
    const savedTodo = dispatch(saveTodoAction(saveTodo(id)));

    setEnteredChangedValue(savedTodo);
    dispatch(cancelTodoAction());
  };

  const inputCancelHandler = () => {
    dispatch(cancelTodoAction());
  };

  return (
    <ul className="todo-list">
      {todos.map((item, idx) => (
        <TodoItem
          key={idx}
          onShowInput={() => editTodoHandler(item.id)}
          onRemove={() => removeTodoHandler(idx)}
          id={item.id}
          onSave={() => inputSaveHandler(item.id)}
          onCancel={inputCancelHandler}
          onChange={inputChangeHandler}
          value={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
