import { useDispatch } from 'react-redux';
import { addTodoError, addTodoPending, addTodoSuccess } from './Action';
import useTodoList from '../hooks/useTodoList';

const App = () => {
  const dispath = useDispatch();

  const { todo } = useTodoList();
  console.log('Todo------1', todo);

  const handleAddTodo = () => {
    dispath(addTodoPending());
    try {
      setTimeout(() => {
        dispath(addTodoSuccess());
      }, 2000);
    } catch (error) {
      dispath(addTodoError(error));
    }
  };

  return (
    <>
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

export default App;
