import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  editTask,
  toggleTask,
  updateTask,
} from '../JS/Actions/actions';

const Task = ({ task }) => {
  const { desc, id, isDone, isEdited } = task;
  const [field, setField] = useState(desc);
  const dispatch = useDispatch();
  return (
    <div className='col-md8'>
      {isEdited ? (
        <input
          type='text'
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
      ) : (
        <span>{desc}</span>
      )}

      <button
        className='btn btn-primary'
        onClick={() => dispatch(toggleTask(id))}
      >
        done
      </button>
      <button
        className='btn btn-danger'
        onClick={() => dispatch(deleteTask(id))}
      >
        delete
      </button>
      <button
        className='btn btn-info'
        onClick={() =>
          isEdited
            ? dispatch(updateTask({ ...task, desc: field, isEdited: false }))
            : dispatch(editTask(id))
        }
      >
        {isEdited ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
