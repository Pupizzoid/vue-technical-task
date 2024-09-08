export const filterByDate = <T>(
  items: T[],
  dateGetter: (item: T) => Date,
  startDate: Date = new Date(),
  daysAgo: number = 7
): T[] => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() - daysAgo);
  return items.filter((item: T) => {
    const publishDate = dateGetter(item);
    return publishDate >= endDate;
  })
}
