import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import { v4 as uuid } from 'uuid';
import { addTodoAction } from '../../store/todo/todo-actions';

import { useDispatch, useSelector } from 'react-redux';
import './NewTodo.scss';
import { selectIsEditing } from '../../store/selectors';

const NewTodo = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const isEditing = useSelector(selectIsEditing);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const todoChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const todoFinishHandler = () => {
    const newTodo = {
      value: enteredValue,
      id: uuid(),
    };
    dispatch(addTodoAction(newTodo));
    form.resetFields();
  };

  return (
    <Form
      onFinish={todoFinishHandler}
      className="todo-form"
      name="todoForm"
      form={form}
      requiredMark={false}
      layout="vertical"
    >
      <div className="form-control">
        <Form.Item
          label="Enter Todo"
          name="newTodo"
          rules={[
            {
              required: true,
              message: 'This field is required!',
            },
          ]}
        >
          <Input
            autoComplete="off"
            value={enteredValue}
            onChange={todoChangeHandler}
            disabled={!!isEditing}
          />
        </Form.Item>
      </div>
      <div className="form-actions">
        <Button htmlType="submit" disabled={!!isEditing}>
          Add Todo
        </Button>
      </div>
    </Form>
  );
};

export default NewTodo;
