import TodoController from '../../src/controller/TodoController';
import Manager from '../../src/model/Manager';

jest.mock('../../src/model/Manager');

describe('controller test', () => {
  beforeEach(() => {
    Manager.mockClear();
  });

  test('should create new todo', () => {
    const manager = new Manager();
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    expect(manager.createTodo).toHaveBeenCalledTimes(1);
    expect(manager.createTodo).toHaveBeenCalledWith('abc');
  });
});
