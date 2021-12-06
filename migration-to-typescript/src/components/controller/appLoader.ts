import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(' https://nodenews.herokuapp.com/', {
            apiKey: 'ef20ba39e5184e19918fb9442763df7b', 
        });
    }
}

export default AppLoader;
