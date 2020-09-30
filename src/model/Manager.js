import Todo from "./Todo";

class Manager {
    constructor() {
        this.todoList = [];
    }

    createTodo(content) {
        let todo = new Todo(content);
        this.todoList.push(todo);
    }
}

export default Manager;