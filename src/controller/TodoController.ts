import TodoManager from "../model/TodoManager";
import Todo from "../model/Todo";
import {TodoFilter} from "../constant/TodoFilter";

// MVP架构
// controller冗余
// VO，dto
// view-model：存在View层
// 转换放在P层
// MVP与MVC的区别：
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
