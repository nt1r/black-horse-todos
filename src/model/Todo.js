class Todo {
  constructor(content) {
    if (Todo.autoIncreasedId === undefined) {
      Todo.autoIncreasedId = 0;
    }

    this.id = Todo.generateId();
    this.content = content;
    this.isCompleted = false;
    this.createdTime = Todo.createCurrentDateText();
  }

  static generateId() {
    Todo.autoIncreasedId += 1;
    return Todo.autoIncreasedId;
  }

  static createCurrentDateText() {
    return new Date();
  }
}

export default Todo;
