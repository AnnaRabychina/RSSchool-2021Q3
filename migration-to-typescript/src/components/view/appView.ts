import News from './news/news';
import Sources from './sources/sources';

interface ISource {
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
    totalResults: number;
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

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IApiNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IApiSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
