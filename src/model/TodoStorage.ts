interface TodoStorage {
  storageAvailable: Function,
  setTodoList: Function,
  getTodoList: Function,
  setGeneratedId: Function,
  getGeneratedId: Function,
}

export default TodoStorage;
