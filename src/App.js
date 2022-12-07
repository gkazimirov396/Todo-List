import React from 'react';
import NewTodo from './components/NewTodo/NewTodo';

import Todos from './components/Todos/Todos';

const App = () => {

  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
};

export default App;
