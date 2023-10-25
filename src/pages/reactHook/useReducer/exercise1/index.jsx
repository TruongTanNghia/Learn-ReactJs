import { useReducer, useState } from 'react';
import todoReducer, { initState } from '../stores/todoLists/reducer';
import { addTodoAction, deleteTodoAction } from '../stores/todoLists/action';

const Bai1UseReducer = () => {
  const [form, setForm] = useState({
    todo: '',
  });

  //* useReducer
  const [state, dispatch] = useReducer(todoReducer, initState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(form));
    return handleClear();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const handleClear = () => {
    setForm({
      todo: '',
    });
  };
  console.log(state, 'Oke');
  return (
    <>
      <form style={{ background: 'none' }} onSubmit={handleAddTodo}>
        <label style={{ fontSize: '15px' }} htmlFor="focus">
          Values
        </label>
        <input
          id="focus"
          type="text"
          name="todo"
          onChange={handleChange}
          value={form.todo}
          placeholder="Please enter value input"
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>

      {state?.todos.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.text}</li>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </ul>
        );
      })}
    </>
  );
};

export default Bai1UseReducer;
