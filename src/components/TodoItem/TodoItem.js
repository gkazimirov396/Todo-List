import React from 'react';
import {
  CloseOutlined,
  SaveOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  enableInputAction,
  cancelTodoAction,
} from '../../store/todo/todo-actions';

import './TodoItem.scss';
import { Reorder } from 'framer-motion';
import { selectIsDisabled, selectIsEditing } from '../../store/selectors';

const todoAnimation = {
  initial: {
    lineHeight: 0,
    opacity: 0,
  },
  animate: {
    lineHeight: 2.17,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const TodoItem = ({ todo, onChange, onSave, onRemove, onEdit }) => {
  const isEditing = useSelector(selectIsEditing);
  const isDisabled = useSelector(selectIsDisabled);

  const dispatch = useDispatch();

  const enableInputHandler = () => {
    dispatch(enableInputAction());
  };

  return (
    <Reorder.Item
      whileDrag={{ scale: 1.1, cursor: 'move' }}
      value={todo}
      {...todoAnimation}
      className="todo-item"
    >
      {isEditing === todo.id ? (
        <Input
          onChange={onChange}
          defaultValue={todo.value}
          size="small"
          onInput={enableInputHandler}
        />
      ) : (
        todo.value
      )}
      <div className="actions">
        {isEditing !== todo.id && (
          <Button className="btn-primary" onClick={onEdit}>
            Edit
            <EditOutlined style={{ marginLeft: '0.3rem' }} />
          </Button>
        )}
        {isEditing !== todo.id && (
          <Button className="btn--alt" onClick={onRemove}>
            Delete
            <DeleteOutlined style={{ marginLeft: '0.3rem' }} />
          </Button>
        )}
        {isEditing === todo.id && (
          <Button
            className="btn-primary"
            onClick={onSave}
            disabled={isDisabled}
          >
            Save
            <SaveOutlined style={{ marginLeft: '0.3rem' }} />
          </Button>
        )}
        {isEditing === todo.id && (
          <Button
            className="btn--alt"
            onClick={() => dispatch(cancelTodoAction())}
          >
            Cancel
            <CloseOutlined style={{ marginLeft: '0.1rem' }} />
          </Button>
        )}
      </div>
    </Reorder.Item>
  );
};

export default TodoItem;
