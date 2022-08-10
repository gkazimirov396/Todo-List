import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewTodo from './components/NewTodo/NewTodo';

import Todos from './components/Todos/Todos';

const App = () => {
  const todos = useSelector(state => state.todo.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
};

export default App;
