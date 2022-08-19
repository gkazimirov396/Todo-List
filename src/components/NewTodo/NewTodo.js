import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';
import { v4 as uuid } from 'uuid';
import { addTodoAction, cancelTodoAction } from '../../store/todo/todo-actions';

import { useDispatch } from 'react-redux';
import './NewTodo.scss';

const NewTodo = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const todoChangeHandler = event => {
    setEnteredValue(event.target.value);
  };
  
  const todoFinishHandler = () => {
    const newTodo = {
      text: enteredValue,
      id: uuid(),
    };
    dispatch(addTodoAction(newTodo));
    dispatch(cancelTodoAction());
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
          />
        </Form.Item>
      </div>
      <div className="form-actions">
        <Button htmlType="submit">Add Todo</Button>
      </div>
    </Form>
  );
};

export default NewTodo;
