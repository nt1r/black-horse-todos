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
        return Todo.autoIncreasedId++;
    }

    createCurrentDateText() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        let hour = currentDate.getHours();
        let minute = currentDate.getMinutes();
        let second = currentDate.getSeconds();
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}

export default Todo;