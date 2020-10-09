import Todo from '../../src/model/Todo';

describe('todo entity test', () => {
  test('should create with correct id', () => {
    let todo = new Todo('abc');
    expect(todo.id).toBe(1);

    todo = new Todo('cba');
    expect(todo.id).toBe(2);

    todo = new Todo('def');
    expect(todo.id).toBe(3);
  });

  test('should create with correct date', () => {
    const todo = new Todo('cooking');
    const year = Number.parseInt(todo.createdTime.substr(0, 4), 10);
    expect(year).toBeGreaterThanOrEqual(2020);
  });
});