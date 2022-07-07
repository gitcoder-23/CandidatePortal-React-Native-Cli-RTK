export interface ArticleModel {
  articles: ArticleInnerModel[];
  articlesCount: number;
}

export interface ArticleInnerModel {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: ArticleAuthorModel;
}

export interface ArticleAuthorModel {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}
