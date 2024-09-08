import { describe, it, expect } from 'vitest'
import { filterByDate } from '@/utils/filter-by-date.utils'

interface Article {
  publishDate: string;
  title: string;
}

describe('filterByDate', () => {
  const articles: Article[] = [
    { publishDate: '2024-09-01', title: 'Article 1' },
    { publishDate: '2024-09-03', title: 'Article 2' },
    { publishDate: '2024-08-15', title: 'Article 3' }
  ];

  it('should return articles published within the last 7 days from today', () => {
    const today = new Date('2024-09-07');
    const result = filterByDate(
      articles,
      (article: Article) => new Date(article.publishDate),
      today,
      7
    );
    expect(result).toEqual([
      { publishDate: '2024-09-01', title: 'Article 1' },
      { publishDate: '2024-09-03', title: 'Article 2' }
    ]);
  });

  it('should return all articles if date range covers all articles', () => {
    const today = new Date('2024-09-07');
    const result = filterByDate(
      articles,
      (article: Article) => new Date(article.publishDate),
      today,
      365
    );
    expect(result).toEqual(articles);
  });
});
