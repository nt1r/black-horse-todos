class Todo {
  constructor(content) {
    if (Todo.autoIncreasedId === undefined) {
      Todo.autoIncreasedId = 1;
    }

    this.id = this.generateId();
    this.content = content;
    this.isCompleted = false;
    this.createdTime = this.createCurrentDateText();
  }

  generateId() {
    Todo.autoIncreasedId += 1;
    return Todo.autoIncreasedId;
  }

  createCurrentDateText() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
}

export default Todo;
