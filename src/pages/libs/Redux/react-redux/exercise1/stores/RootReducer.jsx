//* LIBRARY
import { combineReducers } from 'redux';

//* REACT-REDUX
import todoReducer from './Reducer';

const rootReducer = combineReducers({
  todoList: todoReducer,
});
export default rootReducer;