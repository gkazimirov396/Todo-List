import React from 'react';
import { CloseOutlined, SaveOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { enableInputAction } from '../../store/todo/todo-actions';

import './TodoItem.scss';

const TodoItem = props => {
  const isEditing = useSelector(state => state.todo.isEditing);
  const isDisabled = useSelector(state => state.todo.isDisabled);

  const dispatch = useDispatch();

  const enableInputHandler = () => {
    dispatch(enableInputAction());
  }

  return (
    <li className="todo-item">
      {isEditing === props.id ? (
        <Input
          key={props.id}
          type="text"
          onChange={props.onChange}
          defaultValue={props.value}
          size='small'
          onInput={enableInputHandler}
        />
      ) : (
        props.value
      )}
      <div className="actions">
        {isEditing !== props.id && (
          <Button className="btn-primary" onClick={props.onShowInput}>
            Edit
            <EditOutlined style={{marginLeft: '0.3rem'}} />
          </Button>
        )}
        {isEditing !== props.id && (
          <Button className="btn--alt" onClick={props.onRemove}>
            Delete
            <DeleteOutlined style={{marginLeft: '0.3rem'}} />
          </Button>
        )}
        {isEditing === props.id && (
          <Button className="btn-primary" onClick={props.onSave} disabled={isDisabled}>
            Save
            <SaveOutlined style={{marginLeft: '0.3rem'}} />
          </Button>
        )}
        {isEditing === props.id && (
          <Button className="btn--alt" onClick={props.onCancel}>
            Cancel
            <CloseOutlined style={{marginLeft: '0.1rem'}} />
          </Button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
