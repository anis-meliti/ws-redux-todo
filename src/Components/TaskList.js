import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const taskList = useSelector((state) => state.taskReducer.tasks);
  return (
    <div className='row'>
      {taskList.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
