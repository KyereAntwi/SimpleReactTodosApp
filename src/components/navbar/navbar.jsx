import React, { useContext } from "react";
import { TodosContextProvider } from "../../store/contexts/todos-context";

import "./navbar.css";

const Navbar = (props) => {
  const { todos } = useContext(TodosContextProvider);
  return (
    <div className="navbar">
      <h1>Todos App</h1>
      <p style={{ marginTop: "20px" }}>
        There are <span className="todosLength">{todos.length}</span> todos
        saved at the moment
      </p>
    </div>
  );
};

export default Navbar;
