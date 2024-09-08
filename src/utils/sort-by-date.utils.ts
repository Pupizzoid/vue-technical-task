export const sortByDate = <T>(
  items: T[],
  dateGetter: (item: T) => Date,
  descending: boolean = true
  ): T[] => {
  return items.sort((a, b) => {
    const dateA = dateGetter(a).getTime();
    const dateB = dateGetter(b).getTime();
    return descending ? dateB - dateA : dateA - dateB;
  });
}
