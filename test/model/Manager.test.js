import Manager from "../../src/model/Manager";

describe('manager test', () => {
    test('should create new todo', () => {
       let manager = new Manager();
       manager.createTodo("cooking");

       expect(manager.todoList.length).toBe(1);
       expect(manager.todoList[0].id).toBe(1);
       expect(manager.todoList[0].content).toBe("cooking");
       expect(manager.todoList[0].isCompleted).toBeFalsy();
    });
});