import {
  DELETE_TASK,
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from '../constants/actions-types';

export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: newTask,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});
export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: id,
});
export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  payload: updatedTask,
});
