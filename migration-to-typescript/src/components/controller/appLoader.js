import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ef20ba39e5184e19918fb9442763df7b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
