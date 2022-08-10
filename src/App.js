import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import NewTodo from './components/NewTodo/NewTodo';

import Todos from './components/Todos/Todos';
import { addTodoAction, cancelTodoAction, deleteTodoAction } from './store/todo/todo-actions';

const App = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = enteredText => {
    const newTodo = {
      text: enteredText,
      id: uuid()
    };
    dispatch(addTodoAction(newTodo));
    dispatch(cancelTodoAction());
  };

  const removeTodoHandler = id => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemove={removeTodoHandler} />
    </>
  );
};

export default App;
