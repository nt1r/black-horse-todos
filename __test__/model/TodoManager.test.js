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

  test('should create new todo when exist', () => {
    const manager = new TodoManager();

    manager.createTodo('abc');
    manager.createTodo('abc');

    expect(manager.todoList.length).toBe(2);
  });

  test('should not create new todo when content empty', () => {
    const manager = new TodoManager();

    manager.createTodo('');

    expect(manager.todoList.length).toBe(0);
  });

  test('should find todo by id', () => {
    const manager = new TodoManager();

    manager.createTodo('abc');
    manager.createTodo('def');

    const todo = manager.findTodoById(2);

    expect(todo.id).toBe(2);
    expect(todo.content).toBe('def');
    expect(todo.isCompleted).toBeFalsy();
  });

  test('should throw error when find todo by id if id not exist', () => {
    const manager = new TodoManager();

    manager.createTodo('abc');

    expect(() => {
      manager.findTodoById(100);
    }).toThrowError('Todo id not found');
  });

  test('should set completed status by id', () => {
    const manager = new TodoManager();

    manager.createTodo('abc');
    expect(manager.todoList[0].isCompleted).toBeFalsy();

    manager.setCompletedStatusById(1, true);
    expect(manager.todoList[0].isCompleted).toBeTruthy();

    manager.setCompletedStatusById(1, false);
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });
});
