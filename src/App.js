import React, { useState } from 'react';
import { v4 } from 'uuid';
import NewTodo from './components/NewTodo/NewTodo';

import Todos from './components/Todos/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = enteredText => {
    setTodos(prevState => [{ text: enteredText, id: v4() }, ...prevState]);
  };

  const removeTodoHandler = id => {
    setTodos(prevState => prevState.filter((item, idx) => idx !== id));
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </>
  );
};

export default App;
