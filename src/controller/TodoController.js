class TodoController {
  constructor(manager) {
    this.manager = manager;
  }

  addNewTodo(todo) {
    this.manager.createTodo(todo);
  }
}

export default TodoController;
