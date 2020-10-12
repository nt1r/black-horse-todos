class TodoController {
  constructor(manager) {
    this.manager = manager;
  }

  addNewTodo(todo) {
    this.manager.createTodo(todo);
  }

  setCompletedStatusById(id, isCompleted) {
    this.manager.setCompletedStatusById(id, isCompleted);
  }
}

export default TodoController;
