import { todos, addTodo, toggleCompleteTodo } from './todo-state';

describe('todo-state tests: ', () => {
  beforeEach(() => {
    todos.length = 0;
  });

  test('addTodo add element', () => {
    addTodo({ id: 5, text: 'id5', completed: false });
    expect(todos).toBeTruthy();
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({ id: 5, text: 'id5', completed: false });
  });

  test('toggleCompleteTodo should toggle task to complete/uncomplete', () => {
    addTodo({ id: 2, text: 'mb complete', completed: false });
    toggleCompleteTodo(2, true);
    expect(todos[0]).toEqual({ id: 2, text: 'mb complete', completed: true });
  });
});
