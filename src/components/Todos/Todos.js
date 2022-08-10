import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelTodoAction, saveTodoAction, showTodoAction } from '../../store/todo/todo-actions';

import TodoItem from '../TodoItem/TodoItem';
import './Todos.scss';

const Todos = props => {
  const [enteredChangedValue, setEnteredChangedValue] = useState('');

  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    setEnteredChangedValue(event.target.value);
  };

  const showInputHandler = id => {
    dispatch(showTodoAction(id));
  };

  const inputSaveHandler = id => {
    const savedTodo = dispatch(saveTodoAction({text: enteredChangedValue, id }));

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
          onShowInput={() => showInputHandler(item.id)}
          onRemove={() => props.onRemove(idx)}
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
