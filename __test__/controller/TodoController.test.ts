import TodoController from '../../src/controller/TodoController';
import TodoManager from '../../src/model/TodoManager';
import mockTodoManager, {
  mockCreateTodo,
  mockFindTodoById,
  mockSetCompletedStatusById
} from '../../__mocks__/TodoManager';
import Todo from '../../src/model/Todo';
import TodoLocalStorage from "../../src/storage/TodoLocalStorage";
import {mocked} from "ts-jest/utils";
import {
  mockGetGeneratedId,
  mockGetTodoList,
  mockSetGeneratedId,
  mockSetTodoList, mockStorageAvailable
} from "../../__mocks__/TodoLocalStorage";
import TodoStorage from "../../src/model/TodoStorage";

jest.mock('../../src/model/TodoManager');
jest.mock('../../src/storage/TodoLocalStorage');

describe('controller test', () => {
  beforeEach(() => {
    mocked(TodoLocalStorage).mockClear();
    mocked(TodoLocalStorage).mockImplementation(() => {
      return {
        setTodoList: mockSetTodoList,
        getTodoList: mockGetTodoList,
        setGeneratedId: mockSetGeneratedId,
        getGeneratedId: mockGetGeneratedId,
        storageAvailable: mockStorageAvailable,
      }
    });

    mocked(TodoManager).mockClear();
    mocked(TodoManager).mockImplementation((storage: TodoStorage) => {
      return {
        todoStorage: storage,
        todoList: [],
        createTodo: mockCreateTodo,
        findTodoById: mockFindTodoById,
        setCompletedStatusById: mockSetCompletedStatusById,
        setTodoList: mockSetTodoList,
        setGeneratedId: mockSetGeneratedId,
      }
    })
  });

  test('should create new todo', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    expect(manager.createTodo).toHaveBeenCalledTimes(1);
    expect(manager.createTodo).toHaveBeenCalledWith('abc');
  });

  test('should set completed status by id', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    mockFindTodoById.mockReturnValueOnce(new Todo(1, 'abc'));
    controller.setCompletedStatusById(1, true);

    expect(manager.setCompletedStatusById).toHaveBeenCalledTimes(1);
    expect(manager.setCompletedStatusById).toHaveBeenCalledWith(1, true);
  });
});
