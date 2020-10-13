import TodoManager from '../../src/model/TodoManager';
import TodoLocalStorage from "../../src/storage/TodoLocalStorage";
import { mocked } from "ts-jest/utils";
import {
  mockGetGeneratedId,
  mockGetTodoList,
  mockSetGeneratedId,
  mockSetTodoList, mockStorageAvailable
} from "../../__mocks__/TodoLocalStorage";

jest.mock('../../src/storage/TodoLocalStorage');

describe('manager test', () => {
  beforeEach(() => {
    mocked(TodoLocalStorage).mockClear();
    mockSetTodoList.mockClear();
    mockGetTodoList.mockClear();
    mockSetGeneratedId.mockClear();
    mockGetGeneratedId.mockClear();
    mockStorageAvailable.mockClear();

    mocked(TodoLocalStorage).mockImplementation(() => {
      return {
        setTodoList: mockSetTodoList,
        getTodoList: mockGetTodoList,
        setGeneratedId: mockSetGeneratedId,
        getGeneratedId: mockGetGeneratedId,
        storageAvailable: mockStorageAvailable,
      }
    });
  });

  test('should create new todo', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    mockGetGeneratedId.mockReturnValueOnce(0);

    manager.createTodo('cooking');

    expect(storage.getGeneratedId).toHaveBeenCalledTimes(1);

    expect(storage.setGeneratedId).toHaveBeenCalledTimes(1);
    expect(storage.setGeneratedId).toHaveBeenCalledWith(1);

    expect(storage.setTodoList).toHaveBeenCalledTimes(1);
  });

  test('should create new todo when exist', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    mockGetGeneratedId.mockReturnValueOnce(0);
    mockGetGeneratedId.mockReturnValueOnce(1);

    manager.createTodo('abc');
    manager.createTodo('abc');

    expect(storage.getGeneratedId).toHaveBeenCalledTimes(2);

    expect(storage.setGeneratedId).toHaveBeenCalledTimes(2);
    expect(storage.setGeneratedId).toHaveBeenCalledWith(1);
    expect(storage.setGeneratedId).toHaveBeenCalledWith(2);

    expect(storage.setTodoList).toHaveBeenCalledTimes(2);
  });

  test('should not create new todo when content empty', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    manager.createTodo('');

    expect(storage.getGeneratedId).not.toHaveBeenCalled();
    expect(storage.setGeneratedId).not.toHaveBeenCalled();
    expect(storage.setTodoList).not.toHaveBeenCalled();
  });

  test('should find todo by id', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    mockGetGeneratedId.mockReturnValueOnce(10);
    mockGetGeneratedId.mockReturnValueOnce(11);

    manager.createTodo('abc');
    manager.createTodo('def');

    const todo = manager.findTodoById(12);

    expect(todo.id).toBe(12);
    expect(todo.content).toBe('def');
    expect(todo.isCompleted).toBeFalsy();
  });

  test('should throw error when find todo by id if id not exist', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    manager.createTodo('abc');

    mockGetGeneratedId.mockReturnValueOnce(0);

    expect(() => {
      manager.findTodoById(100);
    }).toThrowError('Todo id not found');
  });

  test('should set completed status by id', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);

    mockGetGeneratedId.mockReturnValueOnce(0);

    manager.createTodo('abc');
    expect(manager.todoList[0].isCompleted).toBeFalsy();

    manager.setCompletedStatusById(1, true);
    expect(manager.todoList[0].isCompleted).toBeTruthy();

    manager.setCompletedStatusById(1, false);
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });
});
