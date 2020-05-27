import { TodosReducer } from "../../store/reducers/todos-reducer";
import { TodosReducerMock } from "../../store/reducers/__mocks__/todos-reducer";

import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO_DONE,
  FILTER_TODO,
} from "../../store/action-types/todos-actions";

describe("Todos Reducer", () => {
  it("should fetch all todos", async () => {
    const gen = await TodosReducer([{ theme: "test", isDone: false }], "");
    expect(gen.length).toEqual(1);
  });

  it("should add a new todo", async () => {
    const todos = await TodosReducer([], {
      type: ADD_TODO,
      todo: { theme: "Test", isDone: false },
    });
    expect(todos.length).toEqual(1);
  });

  it("should delete a todo", async () => {
    const todos = await TodosReducer([{ theme: "test", isDone: false }], {
      type: DELETE_TODO,
      theme: "test",
    });
    expect(todos.length).toEqual(0);
  });

  it("should mark todo done", async () => {
    const todos = await TodosReducer(
      [
        { theme: "test", isDone: false },
        { theme: "test 1", isDone: false },
      ],
      {
        type: MARK_TODO_DONE,
        theme: "test",
      }
    );
    const resultTodo = todos.find(({ theme }) => theme === "test");
    expect(resultTodo.isDone).toEqual(true);
  });

  it("should filter the todo list", async () => {
    const filteredTodos = await TodosReducer(
      [
        { theme: "test", isDone: false },
        { theme: "test 1", isDone: false },
      ],
      { type: FILTER_TODO, keyword: "test" }
    );

    expect(filteredTodos.length).toEqual(2);
  });
});
