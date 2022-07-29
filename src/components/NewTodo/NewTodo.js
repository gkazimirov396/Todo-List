import React, { useState } from 'react';

import classes from './NewTodo.module.scss';

const NewTodo = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const todoChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const todoSubmitHandler = event => {
    event.preventDefault();

    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form
      onSubmit={todoSubmitHandler}
      className={classes['todo-form']}
    >
      <div className={classes['form-control']}>
        <label htmlFor="new-todo">Enter Todo</label>
        <input
          type="text"
          id="new-todo"
          onChange={todoChangeHandler}
          value={enteredValue}
          autoComplete="off"
          required
        />
      </div>
      <div className={classes['form-actions']}>
        <button>Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
