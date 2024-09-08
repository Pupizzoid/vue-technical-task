import { describe, it, expect } from 'vitest';
import { sortByDate } from '@/utils/sort-by-date.utils'

interface Article {
  publishDate: string;
  title: string;
}

describe('sortByDate', () => {
  const articles: Article[] = [
    { publishDate: '2024-09-01', title: 'Article 1' },
    { publishDate: '2024-09-10', title: 'Article 2' },
    { publishDate: '2024-09-05', title: 'Article 3' }
  ];

  it('should sort articles by date in descending order', () => {
    const result = sortByDate(
      articles,
      (article: Article) => new Date(article.publishDate),
      true
    );
    expect(result).toEqual([
      { publishDate: '2024-09-10', title: 'Article 2' },
      { publishDate: '2024-09-05', title: 'Article 3' },
      { publishDate: '2024-09-01', title: 'Article 1' }
    ]);
  });

  it('should sort articles by date in ascending order', () => {
    const result = sortByDate(
      articles,
      (article: Article) => new Date(article.publishDate),
      false
    );
    expect(result).toEqual([
      { publishDate: '2024-09-01', title: 'Article 1' },
      { publishDate: '2024-09-05', title: 'Article 3' },
      { publishDate: '2024-09-10', title: 'Article 2' }
    ]);
  });
});
