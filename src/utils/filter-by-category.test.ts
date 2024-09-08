import { describe, it, expect } from 'vitest'
import { filterByCategory } from '@/utils/filter-by-category.utils';

interface Article {
  category: string;
  title: string;
}

describe('filter-by-category', () => {
  const articles: Article[] = [
    { category: 'news', title: 'Article 1' },
    { category: 'essay', title: 'Article 2' },
    { category: 'news', title: 'Article 3' }
  ];


  it('should return articles that match active filters', () => {
    const filters = { news: true, essay: false };
    const result = filterByCategory(
      articles,
      (article: Article) => article.category,
      filters
    );

    expect(result).toEqual([
      { category: 'news', title: 'Article 1' },
      { category: 'news', title: 'Article 3' }
    ]);
  });


  it('should return all articles if filters are not active', () => {
    const filters = { news: false, essay: false };
    const result = filterByCategory(
      articles,
      (article: Article) => article.category,
      filters
    );

    expect(result).toEqual(articles);
  });
});
