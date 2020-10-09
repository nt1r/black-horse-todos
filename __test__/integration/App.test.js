import Manager from '../../src/model/Manager';
import TodoController from '../../src/controller/TodoController';

describe('app integration test', () => {
  beforeEach(() => {

  });

  test('should create new todo', () => {
    const manager = new Manager();
    const controller = new TodoController(manager);

    controller.addNewTodo('cooking');

    expect(manager.todoList.length).toBe(1);
    expect(manager.todoList[0].id).toBe(1);
    expect(manager.todoList[0].content).toBe('cooking');
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });

  test('should not create new todo when exist', () => {
    const manager = new Manager();
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    controller.addNewTodo('abc');

    expect(manager.todoList.length).toBe(1);
  });

  test('should not create new todo when content empty', () => {
    const manager = new Manager();
    const controller = new TodoController(manager);

    controller.addNewTodo('');

    expect(manager.todoList.length).toBe(0);
  });
});
