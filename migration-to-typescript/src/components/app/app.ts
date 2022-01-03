import AppController from '../controller/controller';
import { IApiNews } from '../controller/options';
import AppView from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IApiNews) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
