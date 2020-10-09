import TodoController from '../../src/controller/TodoController';
import TodoManager from '../../src/model/TodoManager';

jest.mock('../../src/model/TodoManager');

describe('controller test', () => {
  beforeEach(() => {
    TodoManager.mockClear();
  });

  test('should create new todo', () => {
    const manager = new TodoManager();
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    expect(manager.createTodo).toHaveBeenCalledTimes(1);
    expect(manager.createTodo).toHaveBeenCalledWith('abc');
  });
});
