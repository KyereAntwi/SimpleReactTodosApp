import React from "react";
import TodosContext from "./store/contexts/todos-context";
import Navbar from "./components/navbar/navbar";

import "./app.css";
import AddTodo from "./components/add-todo/add-todo";
import TodoList from "./components/todo-list/todo-list";

const App = () => {
  return (
    <div className="app">
      <TodosContext>
        <Navbar />
        <AddTodo />
        <TodoList />
      </TodosContext>
    </div>
  );
};

export default App;
