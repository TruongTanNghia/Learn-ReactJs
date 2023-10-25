import { useSelector } from "react-redux";
const useTodoList = () => {
  const state  = useSelector((stateData) => stateData.todoList);
  return state;
};
export default useTodoList;
