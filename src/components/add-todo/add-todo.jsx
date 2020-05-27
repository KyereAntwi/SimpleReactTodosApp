import React, { useContext, useState } from "react";
import { TodosContextProvider } from "../../store/contexts/todos-context";
import { ADD_TODO } from "../../store/action-types/todos-actions";
import "./add-todo.css";

const AddTodo = () => {
  const { dispatch } = useContext(TodosContextProvider);
  const [theme, setTheme] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, todo: { theme: theme } });
    return setTheme("");
  };

  const onChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="addtodo">
      <input
        type="text"
        required
        value={theme}
        placeholder="Enter theme of new todo ..."
        onChange={onChange}
      />
    </form>
  );
};

export default AddTodo;
