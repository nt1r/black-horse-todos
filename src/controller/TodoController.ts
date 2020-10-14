import TodoManager from "../model/TodoManager";
import Todo from "../model/Todo";
import {TodoFilter} from "../constant/TodoFilter";

class TodoController {
  manager: TodoManager;
  constructor(manager: TodoManager) {
    this.manager = manager;
  }

  addNewTodo(content: string) {
    this.manager.createTodo(content);
  }

  setCompletedStatusById(id: number, isCompleted: boolean) {
    this.manager.setCompletedStatusById(id, isCompleted);
  }

  filterTodos(filter: TodoFilter) {
    const todos: Todo[] = this.manager.todoList;
    let filteredTodos: Todo[] = todos;
    switch (filter) {
      case TodoFilter.active:
        filteredTodos = todos.filter((todo) => todo.isCompleted === false);
        break;
      case TodoFilter.completed:
        filteredTodos = todos.filter((todo) => todo.isCompleted === true);
        break;
    }

    this.manager.setFilteredTodoList(filteredTodos);
  }
}

export default TodoController;
