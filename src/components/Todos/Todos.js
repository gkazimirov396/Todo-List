import React, { useState } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelTodoAction,
  saveTodoAction,
  deleteTodoAction,
  editTodoAction,
  reorderTodosAction,
} from '../../store/todo/todo-actions';

import TodoItem from '../TodoItem/TodoItem';
import './Todos.scss';
import { selectAllTodos } from '../../store/selectors';

const Todos = () => {
  const [enteredChangedValue, setEnteredChangedValue] = useState('');

  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    setEnteredChangedValue(event.target.value);
  };

  const removeTodo = id => {
    return todos.filter(todo => todo.id !== id);
  };

  const removeTodoHandler = id => {
    dispatch(deleteTodoAction(removeTodo(id)));
  };

  const editTodoHandler = id => {
    dispatch(editTodoAction(id));
  };

  const saveTodo = id => {
    return todos.map(item => {
      return item.id === id ? { value: enteredChangedValue, id } : item;
    });
  };

  const inputSaveHandler = id => {
    dispatch(saveTodoAction(saveTodo(id)));
  };

  const inputCancelHandler = () => {
    dispatch(cancelTodoAction());
  };

  const reorderTodosHandler = newTodos => {
    dispatch(reorderTodosAction(newTodos));
  };

  return (
    <Reorder.Group
      values={todos}
      axis="y"
      onReorder={reorderTodosHandler}
      className="todo-list"
    >
      <AnimatePresence initial={false}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            onEdit={() => editTodoHandler(todo.id)}
            onRemove={() => removeTodoHandler(todo.id)}
            todo={todo}
            onSave={() => inputSaveHandler(todo.id)}
            onCancel={inputCancelHandler}
            onChange={inputChangeHandler}
          />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default Todos;
