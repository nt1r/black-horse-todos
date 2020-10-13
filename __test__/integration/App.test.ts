import TodoManager from '../../src/model/TodoManager';
import TodoController from '../../src/controller/TodoController';
import TodoLocalStorage from "../../src/storage/TodoLocalStorage";

describe('app integration test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should create new todo', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('cooking');

    expect(manager.todoList.length).toBe(1);
    expect(manager.todoList[0].id).toBe(1);
    expect(manager.todoList[0].content).toBe('cooking');
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });

  test('should create new todo when exist', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    controller.addNewTodo('abc');

    expect(manager.todoList.length).toBe(2);
  });

  test('should not create new todo when content empty', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('');

    expect(manager.todoList.length).toBe(0);
  });

  test('should change todo state by id', () => {
    const storage = new TodoLocalStorage();
    const manager = new TodoManager(storage);
    const controller = new TodoController(manager);

    controller.addNewTodo('abc');
    controller.setCompletedStatusById(1, true);

    expect(manager.todoList[0].isCompleted).toBeTruthy();
  });
});
