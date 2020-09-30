import Todo from './Todo';

class Manager {
  constructor() {
    this.todoList = [];
  }

  createTodo(content) {
    const todo = new Todo(content);
    this.todoList.push(todo);
  }
}

export default Manager;
