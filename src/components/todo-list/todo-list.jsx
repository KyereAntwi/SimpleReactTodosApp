import React, { useContext } from "react";
import { TodosContextProvider } from "../../store/contexts/todos-context";

import {
  MARK_TODO_DONE,
  DELETE_TODO,
} from "../../store/action-types/todos-actions";

import Todo from "./todo/todo";

import "./todo-list.css";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodosContextProvider);

  const markDone = (theme) => {
    return dispatch({ type: MARK_TODO_DONE, theme: theme });
  };

  const deleteTodo = (theme) => {
    return dispatch({ type: DELETE_TODO, theme: theme });
  };

  return (
    <div className="todoList">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.theme}
            todo={todo}
            markDone={markDone}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>There are no todos to display ...</p>
      )}
    </div>
  );
};

export default TodoList;
