import {parseFilterFromUrl} from "../../src/utils/UrlUtil";
import {TodoFilter} from "../../src/constant/TodoFilter";

describe('URL util test', () => {
  test('should parse from tail URL', () => {
    const tailUrlAll = "#/";
    const tailUrlActive = "#/active";
    const tailUrlCompleted = "#/completed";

    expect(parseFilterFromUrl(tailUrlAll)).toBe(TodoFilter.all);
    expect(parseFilterFromUrl(tailUrlActive)).toBe(TodoFilter.active);
    expect(parseFilterFromUrl(tailUrlCompleted)).toBe(TodoFilter.completed);
  });

  test('should return all todos when URL invalid', () => {
    const tailUrlInvalid = "#/error";

    expect(parseFilterFromUrl(tailUrlInvalid)).toBe(TodoFilter.all);
  });
});