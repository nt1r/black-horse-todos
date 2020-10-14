import TodoController from '../../src/controller/TodoController';
import TodoManager from '../../src/model/TodoManager';
import {mockCreateTodo, mockFindTodoById, mockSetCompletedStatusById} from '../../__mocks__/TodoManager';
import Todo from '../../src/model/Todo';
import TodoLocalStorage from "../../src/storage/TodoLocalStorage";
import {mocked} from "ts-jest/utils";
import {
  mockGetGeneratedId,
  mockGetTodoList,
  mockSetFilteredTodoList,
  mockSetGeneratedId,
  mockSetTodoList,
  mockStorageAvailable
} from "../../__mocks__/TodoLocalStorage";
import TodoStorage from "../../src/model/TodoStorage";
import {TodoFilter} from "../../src/constant/TodoFilter";

jest.mock('../../src/model/TodoManager');
jest.mock('../../src/storage/TodoLocalStorage');

function mockManagerWithTodos() {
  const todos: Todo[] = [];
  const todoA = new Todo(1, 'aaa');
  todoA.isCompleted = true;
  todos.push(todoA);

  const todoB = new Todo(2, 'bbb');
  todoB.isCompleted = false;
  todos.push(todoB);

  mocked(TodoManager).mockImplementation((storage: TodoStorage) => {
    return {
      todoStorage: storage,
      todoList: todos,
      filteredTodoList: [],
      createTodo: mockCreateTodo,
      findTodoById: mockFindTodoById,
      setCompletedStatusById: mockSetCompletedStatusById,
      setTodoList: mockSetTodoList,
      setGeneratedId: mockSetGeneratedId,
      setFilteredTodoList: mockSetFilteredTodoList,
    }
  });

  return {
    todoA,
    todoB,
    todos
  };
}

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
    mockSetFilteredTodoList.mockClear();
    mocked(TodoManager).mockImplementation((storage: TodoStorage) => {
      return {
        todoStorage: storage,
        todoList: [],
        filteredTodoList: [],
        createTodo: mockCreateTodo,
        findTodoById: mockFindTodoById,
        setCompletedStatusById: mockSetCompletedStatusById,
        setTodoList: mockSetTodoList,
        setGeneratedId: mockSetGeneratedId,
        setFilteredTodoList: mockSetFilteredTodoList,
      }
    });
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

  test('should filter all todos', () => {
    const {todos} = mockManagerWithTodos();

    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.filterTodos(TodoFilter.all);

    expect(manager.setFilteredTodoList).toHaveBeenCalledTimes(1);
    expect(manager.setFilteredTodoList).toHaveBeenCalledWith(todos);
  });

  test('should filter active todos', () => {
    const {todoB} = mockManagerWithTodos();

    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.filterTodos(TodoFilter.active);

    expect(manager.setFilteredTodoList).toHaveBeenCalledTimes(1);
    expect(manager.setFilteredTodoList).toHaveBeenCalledWith([todoB]);
  });

  test('should filter completed todos', () => {
    const {todoA} = mockManagerWithTodos();

    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.filterTodos(TodoFilter.completed);

    expect(manager.setFilteredTodoList).toHaveBeenCalledTimes(1);
    expect(manager.setFilteredTodoList).toHaveBeenCalledWith([todoA]);
  });
});
