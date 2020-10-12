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

  setCompletedStatusById(id, isCompleted) {
    const todo = this.findTodoById(id);
    todo.isCompleted = isCompleted;
  }

  findTodoById(id) {
    const filteredList = this.todoList.filter((todo) => todo.id === id);
    if (filteredList.length === 0) {
      throw new Error('Todo id not found');
    }
    return filteredList[0];
  }
}

export default TodoManager;
