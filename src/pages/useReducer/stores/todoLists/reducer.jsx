import * as types from './type';
import { v4 as uuid } from 'uuid';
export const initState = {
  todos: [],
  loading: false,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      // console.log(action.payload, '1----------');
      // logic Add todo
      const newTodo = [
        ...state.todos,
        {
          id: uuid(),
          text: action.payload.todo,
        },
      ];
      return {
        ...state,
        todos: newTodo,
      };

    case types.DELETE_TODO:
      //logic Delete Todo
      const filterTodo = state.todos.filter((todo) => todo.id !== action.payload);

      return {
        ...state,
        todos: filterTodo,
      };

    default:
      return state;
  }
};

export default todoReducer;
