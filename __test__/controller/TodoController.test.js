import TodoController from '../../src/controller/TodoController';
import TodoManager from '../../src/model/TodoManager';
import { mockFindTodoById, mockSetCompletedStatusById } from '../../__mocks__/TodoManager';
import Todo from '../../src/model/Todo';

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

  test('should set completed status by id', () => {
    const manager = new TodoManager();
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    mockFindTodoById.mockReturnValueOnce(new Todo('abc'));
    controller.setCompletedStatusById(1, true);

    expect(manager.setCompletedStatusById).toHaveBeenCalledTimes(1);
    expect(manager.setCompletedStatusById).toHaveBeenCalledWith(1, true);
  });
});
