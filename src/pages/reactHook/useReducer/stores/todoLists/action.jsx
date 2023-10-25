import * as types from './type';

export const addTodoAction = (data) => {
  return {
    type: types.ADD_TODO,
    payload: data,
  };
};

export const deleteTodoAction = (index) => {
  return {
    type: types.DELETE_TODO,
    payload: index,
  };
};
