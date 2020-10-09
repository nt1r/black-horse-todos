import Todo from './Todo';

class Manager {
  constructor() {
    this.todoList = [];
  }

  createTodo(content) {
    if (content === '') {
      return;
    }

    if (this.isNewTodoExist(content)) {
      return;
    }

    const todo = new Todo(content);
    this.todoList.push(todo);
  }

  isNewTodoExist(newTodo) {
    for (const index in this.todoList) {
      if (this.todoList[index].content === newTodo) {
        return true;
      }
    }
    return false;
  }
}

export default Manager;
