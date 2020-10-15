import {TodoFilter} from "../constant/TodoFilter";

export const parseFilterFromUrl = (tailUrl: string): TodoFilter => {
  const lastSlashIndex = tailUrl.lastIndexOf('/');
  if (lastSlashIndex === -1) {
    return TodoFilter.all;
  } else {
    const filter: string = tailUrl.substring(lastSlashIndex + 1, tailUrl.length);
    switch (filter) {
      case 'active':
        return TodoFilter.active;
      case 'completed':
        return TodoFilter.completed;
      default:
        return TodoFilter.all;
    }
  }
}

export const parseFilterStrFromUrl = (tailUrl: string): string => {
  const lastSlashIndex = tailUrl.lastIndexOf('/');
  if (lastSlashIndex === -1 || lastSlashIndex === tailUrl.length - 1) {
    return 'all';
  } else {
    return tailUrl.substring(lastSlashIndex + 1, tailUrl.length);
  }
}