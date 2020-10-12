export const mockCreateTodo = jest.fn();
export const mockFindTodoById = jest.fn();
export const mockSetCompletedStatusById = jest.fn();
const mockManager = jest.fn().mockImplementation(() => ({
  createTodo: mockCreateTodo,
  findTodoById: mockFindTodoById,
  setCompletedStatusById: mockSetCompletedStatusById,
}));

export default mockManager;
