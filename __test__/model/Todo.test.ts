import Todo from '../../src/model/Todo';

describe('todo entity test', () => {
  test('should create with correct id', () => {
    let todo = new Todo(1, 'abc');
    expect(todo.id).toBe(1);
    expect(todo.content).toBe('abc');

    todo = new Todo(2, 'cba');
    expect(todo.id).toBe(2);
    expect(todo.content).toBe('cba');

    todo = new Todo(3, 'def');
    expect(todo.id).toBe(3);
    expect(todo.content).toBe('def');
  });

  test('should create with correct date', () => {
    const todo = new Todo(1, 'cooking');
    const date = todo.createdTime;
    expect(date.getUTCFullYear() >= 2020).toBeTruthy();
  });
});
