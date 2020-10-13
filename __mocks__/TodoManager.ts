export const mockCreateTodo = jest.fn();
export const mockFindTodoById = jest.fn();
export const mockSetCompletedStatusById = jest.fn();
export const mockSetTodoList = jest.fn();
export const mockSetGeneratedId = jest.fn();
const mockTodoManager = jest.fn().mockImplementation(() => ({
  createTodo: mockCreateTodo,
  findTodoById: mockFindTodoById,
  setCompletedStatusById: mockSetCompletedStatusById,
}));

export default mockTodoManager;
