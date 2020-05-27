import React, { createContext, useReducer } from "react";
import { TodosReducer } from "../reducers/todos-reducer";

export const TodosContextProvider = createContext();

const TodosContext = (props) => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <TodosContextProvider.Provider
      value={{
        todos,
        dispatch,
      }}
    >
      {props.children}
    </TodosContextProvider.Provider>
  );
};

export default TodosContext;
