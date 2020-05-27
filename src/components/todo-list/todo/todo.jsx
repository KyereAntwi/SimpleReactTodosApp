import React from "react";
import PropTypes from "prop-types";

import "./todo.css";

const Todo = ({ todo, markDone, deleteTodo }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => markDone(todo.theme)}
      />
      {todo.theme}
      <button onClick={() => deleteTodo(todo.theme)}>x</button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  markDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
