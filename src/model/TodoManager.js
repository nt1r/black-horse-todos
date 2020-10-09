import Todo from './Todo';

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  createTodo(content) {
    if (content === '') {
      return;
    }

    const todo = new Todo(content);
    this.todoList.push(todo);
  }
}

export default TodoManager;
