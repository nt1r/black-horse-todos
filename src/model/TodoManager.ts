import TodoStorage from './TodoStorage';
import Todo from './Todo';
import TodoLocalStorage from '../storage/TodoLocalStorage';

class TodoManager {
  todoStorage: TodoStorage;
  todoList: Todo[] = [];
  constructor(storage: TodoStorage) {
    this.todoStorage = storage;
    this.todoList = this.todoStorage.getTodoList();
  }

  createTodo(content: string) {
    if (content === '') {
      return;
    }

    const id = this.todoStorage.getGeneratedId() + 1;
    const todo = new Todo(id, content);

    this.todoList.push(todo);
    this.setGeneratedId(id);
    this.setTodoList();
  }

  setCompletedStatusById(id: number, isCompleted: boolean) {
    const todo = this.findTodoById(id);
    todo.isCompleted = isCompleted;
    this.setTodoList();
  }

  findTodoById(id: number) {
    const filteredList = this.todoList.filter((todo) => todo.id === id);
    if (filteredList.length === 0) {
      throw new Error('Todo id not found');
    }
    return filteredList[0];
  }

  setTodoList() {
    this.todoStorage.setTodoList(this.todoList);
  }

  setGeneratedId(generatedId: number) {
    this.todoStorage.setGeneratedId(generatedId);
  }
}

export default TodoManager;
