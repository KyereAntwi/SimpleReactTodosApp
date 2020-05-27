let __value = 42;

const TodosReducerMock = jest.fn(() => __value);
TodosReducerMock.__setValue = (v) => (__value = v);
export default TodosReducerMock;
