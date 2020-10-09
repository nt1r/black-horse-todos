import TodoManager from '../../src/model/TodoManager';

describe('manager test', () => {
  beforeEach(() => {

  });

  test('should create new todo', () => {
    const manager = new TodoManager();
    manager.createTodo('cooking');

    expect(manager.todoList.length).toBe(1);
    expect(manager.todoList[0].id).toBe(1);
    expect(manager.todoList[0].content).toBe('cooking');
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });

  test('should not create new todo when exist', () => {
    const manager = new TodoManager();

    manager.createTodo('abc');
    manager.createTodo('abc');

    expect(manager.todoList.length).toBe(1);
  });

  test('should not create new todo when content empty', () => {
    const manager = new TodoManager();

    manager.createTodo('');

    expect(manager.todoList.length).toBe(0);
  });
});
