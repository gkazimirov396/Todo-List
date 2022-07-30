import React from 'react';

import classes from './TodoItem.module.scss';

const TodoItem = props => {
  return (
    <li className={classes['todo-item']}>
      {props.children}
      <div className={classes.actions}>
        {props.show !== props.id && <button className={classes.btn} onClick={props.onShowInput}>
          Edit
        </button>}
        {props.show !== props.id && <button className={classes['btn--alt']} onClick={props.onRemove}>
          Delete
        </button>}
        {props.show === props.id && <button className={classes.btn} onClick={props.onSave}>
          Save
        </button>}
        {props.show === props.id && <button className={classes['btn--alt']} onClick={props.onCancel}>
          Cancel
        </button>}
      </div>
    </li>
  );
};

export default TodoItem;
