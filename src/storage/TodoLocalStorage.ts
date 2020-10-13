import TodoStorage from "../model/TodoStorage";
import Todo from "../model/Todo";

export default class TodoLocalStorage implements TodoStorage {
  storageAvailable(type: string) {
    let storage;
    try {
      // @ts-ignore
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && (storage && storage.length !== 0);
    }
  }

  setTodoList(todoList: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }

  getTodoList() {
    const todoList = localStorage.getItem('todos');
    if (todoList === null) {
      return [];
    }
    return JSON.parse(todoList);
  }

  setGeneratedId(generatedId: number) {
    localStorage.setItem('generatedId', generatedId.toString());
  }

  getGeneratedId() {
    const generatedId = localStorage.getItem('generatedId');
    if (generatedId === null) {
      return 0;
    }
    return Number.parseInt(generatedId);
  }
}
