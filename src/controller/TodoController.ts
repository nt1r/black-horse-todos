import TodoManager from "../model/TodoManager";

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
}

export default TodoController;
