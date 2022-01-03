export type TUrlOptions = {
    [key: string]: string | undefined;
}

export type CallbackType<T> = (data: T) => void;

export interface ISource {
    id: string;
    name: string;
  }

export interface IArticle {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: ISource;
  }

export interface IApiNews {
    status: string;
    totalResults?: number;
    articles: IArticle[];
  }

  export interface ISources extends ISource{
    category: string;
    country: string;
    description: string;
    url: string;
    language: string;
  }
  
  export interface IApiSources{
    status: string;
    sources: ISources[];
  }
