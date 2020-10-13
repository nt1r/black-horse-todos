class Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  createdTime: Date;
  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
    this.isCompleted = false;
    this.createdTime = Todo.createCurrentDateText();
  }

  static createCurrentDateText() {
    return new Date();
  }
}

export default Todo;
