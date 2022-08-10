import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import './NewTodo.scss';

const NewTodo = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [form] = Form.useForm();

  const todoChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const todoFinishHandler = () => {
    props.onAddTodo(enteredValue);
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
