import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  MARK_TODO_DONE,
} from "../action-types/todos-actions";

const filter = (keyword, todos) => {
  if (keyword.length > 0) {
    let filteredList = todos.filter((todo) =>
      todo.theme.toLowerCase().includes(keyword.toLowerCase())
    );
    return filteredList;
  } else {
    return todos;
  }
};

export const TodosReducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          theme: action.todo.theme,
          isDone: false,
        },
      ];
    case DELETE_TODO:
      return todos.filter((todo) => todo.theme !== action.theme);
    case MARK_TODO_DONE:
      let found = todos.find(({ theme }) => theme === action.theme);
      const list = todos.filter(({ theme }) => theme !== action.theme);
      found.isDone = !found.isDone;
      return [...list, found];
    case FILTER_TODO:
      return filter(action.keyword, todos);
    default:
      return todos;
  }
};
