import TodoManager from '../../src/model/TodoManager';
import TodoController from '../../src/controller/TodoController';

describe('app integration test', () => {
  beforeEach(() => {

  });

  test('should create new todo', () => {
    const manager = new TodoManager();
    const controller = new TodoController(manager);

    controller.addNewTodo('cooking');

    expect(manager.todoList.length).toBe(1);
    expect(manager.todoList[0].id).toBe(1);
    expect(manager.todoList[0].content).toBe('cooking');
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });

  test('should create new todo when exist', () => {
    const manager = new TodoManager();
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    controller.addNewTodo('abc');

    expect(manager.todoList.length).toBe(2);
  });

  test('should not create new todo when content empty', () => {
    const manager = new TodoManager();
    const controller = new TodoController(manager);

    controller.addNewTodo('');

    expect(manager.todoList.length).toBe(0);
  });
});
