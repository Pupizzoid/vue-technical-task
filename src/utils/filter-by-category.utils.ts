interface FilterOptions {
  [key: string]: boolean;
}

export const filterByCategory = <T>(
  items: T[],
  categoryGetter:(item: T) => string,
  filters: FilterOptions
): T[] => {
  if(Object.values(filters).every(value => !value)) {
    return items;
  }

  return items.filter((item: T) => {
    const category = categoryGetter(item);
    return filters[category] || false;
  })
}
