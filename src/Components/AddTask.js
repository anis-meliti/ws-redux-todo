import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions/actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='row'>
      <input
        type='text'
        onChange={(e) => setTask(e.target.value)}
        className='col-md8'
      />
      <button
        className='btn btn-primary col-md4'
        onClick={() =>
          dispatch(addTask({ id: Date.now(), desc: task, isDone: false }))
        }
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
