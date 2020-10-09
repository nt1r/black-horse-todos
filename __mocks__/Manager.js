export const mockCreateTodo = jest.fn();
const mockManager = jest.fn().mockImplementation(() => ({
  createTodo: mockCreateTodo,
}));

export default mockManager;
