import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import classes from './Todos.module.scss';

const Todos = props => {
  const [isEditing, setIsEditing] = useState(null);
  const [enteredChangedValue, setEnteredChangedValue] = useState('');

  const inputChangeHandler = event => {
    setEnteredChangedValue(event.target.value);
  };

  const showInputHandler = id => {
    setIsEditing(id);
    setEnteredChangedValue('');
  };

  const inputSaveHandler = id => {
    const savedTodo = props.items.map(item => {
      return item.id === id ? (item.text = enteredChangedValue) : item.text;
    });

    setEnteredChangedValue(savedTodo);
    setIsEditing(null);
  };

  const inputCancelHandler = () => {
    setIsEditing(null);
  };

  return (
    <ul className={classes['todo-list']}>
      {props.items.map((item, idx) => (
        <TodoItem
          key={idx}
          onShowInput={showInputHandler.bind(null, item.id)}
          onRemove={props.onRemove.bind(null, idx)}
          show={isEditing}
          id={item.id}
          onSave={inputSaveHandler.bind(null, item.id)}
          onCancel={inputCancelHandler}
        >
          {isEditing === item.id ? (
            <input
              key={item.id}
              type="text"
              className={classes.input}
              onChange={inputChangeHandler}
              defaultValue={item.text}
            />
          ) : (
            item.text
          )}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
