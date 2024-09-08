export interface IArticle {
  title: string;
  publishDate: string;
  category: string;
  url: string;
}

export interface IArticleProps {
  article: IArticle;
}
