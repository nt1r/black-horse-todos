import TodoManager from '../../src/model/TodoManager';
import TodoController from '../../src/controller/TodoController';
import TodoLocalStorage from "../../src/storage/TodoLocalStorage";
import {TodoFilter} from "../../src/constant/TodoFilter";

function initTestCase() {
  const storage = new TodoLocalStorage();
  const manager = new TodoManager(storage);
  const controller = new TodoController(manager);
  return {manager, controller};
}

function initTodos(controller: TodoController) {
  controller.addNewTodo('aaa');
  controller.setCompletedStatusById(1, true);

  controller.addNewTodo('bbb');
  controller.setCompletedStatusById(2, false);
}

describe('app integration test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should create new todo', () => {
    const {manager, controller} = initTestCase();

    controller.addNewTodo('cooking');

    expect(manager.todoList.length).toBe(1);
    expect(manager.todoList[0].id).toBe(1);
    expect(manager.todoList[0].content).toBe('cooking');
    expect(manager.todoList[0].isCompleted).toBeFalsy();
  });

  test('should create new todo when exist', () => {
    const {manager, controller} = initTestCase();

    controller.addNewTodo('abc');
    controller.addNewTodo('abc');

    expect(manager.todoList.length).toBe(2);
  });

  test('should not create new todo when content empty', () => {
    const {manager, controller} = initTestCase();

    controller.addNewTodo('');

    expect(manager.todoList.length).toBe(0);
  });

  test('should change todo state by id', () => {
    const {manager, controller} = initTestCase();

    controller.addNewTodo('abc');
    controller.setCompletedStatusById(1, true);

    expect(manager.todoList[0].isCompleted).toBeTruthy();
  });

  test('should filter all todos', () => {
    const {manager, controller} = initTestCase();
    initTodos(controller);

    controller.filterTodos(TodoFilter.all);

    expect(manager.filteredTodoList).toHaveLength(2);
    expect(manager.filteredTodoList[0].content).toBe('aaa');
    expect(manager.filteredTodoList[1].content).toBe('bbb');
  });

  test('should filter active todos', () => {
    const {manager, controller} = initTestCase();
    initTodos(controller);

    controller.filterTodos(TodoFilter.active);

    expect(manager.filteredTodoList).toHaveLength(1);
    expect(manager.filteredTodoList[0].content).toBe('bbb');
  });

  test('should filter completed todos', () => {
    const {manager, controller} = initTestCase();
    initTodos(controller);

    controller.filterTodos(TodoFilter.completed);

    expect(manager.filteredTodoList).toHaveLength(1);
    expect(manager.filteredTodoList[0].content).toBe('aaa');
  });
});
